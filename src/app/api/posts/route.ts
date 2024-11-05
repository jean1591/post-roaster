import { NextRequest, NextResponse } from 'next/server'
import { Objective, Persona, Platform } from '@/store/features/createPost/slice'
import { endpointFormatter, logger } from '../utils/logger'

import { PostAnalysis } from '../interfaces/post'
import { getOpenAiData } from '../utils/getOpenAiData'
import { getSession } from '../auth/[...nextauth]/authOptions'
import { openAiResponseToJsonFormatter } from '../utils/openAiResponseFormater'
import prisma from '@/lib/prisma'

export async function POST(request: NextRequest) {
  logger.info(endpointFormatter(request))
  try {
    const session = await getSession()

    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 403 })
    }

    const {
      user: { id: userId },
    } = session

    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    })

    if (!existingUser) {
      console.error(`No user found for id ${userId}`)

      return NextResponse.json(
        { error: `No user found for id ${userId}` },
        { status: 404 }
      )
    }

    const { objective, persona, platform, postContent } = await request.json()
    const newPost = await validatePost({
      objective,
      persona,
      platform,
      postContent,
      userId,
    })

    return NextResponse.json(newPost)
  } catch (error) {
    console.error('Post creation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

interface PostDetails {
  objective: Objective
  persona: Persona
  platform: Platform
  postContent: string
  userId: string
}
const validatePost = async ({
  objective,
  persona,
  platform,
  postContent,
  userId,
}: PostDetails) => {
  const newPost = await prisma.post.create({
    data: { objective, persona, platform, content: postContent, userId },
  })

  const prompt = generatePrompt({ objective, persona, platform, postContent })
  const completion = await getOpenAiData(prompt)
  const postAnalysis = openAiResponseToJsonFormatter(
    completion.choices[0].message.content ?? '{}'
  )

  await savePostAnalysis(newPost.id, postAnalysis)

  return newPost
}

async function savePostAnalysis(postId: string, postAnalysis: PostAnalysis[]) {
  for (const analysis of postAnalysis) {
    await prisma.postAnalysis.create({
      data: {
        postId: postId,
        label: analysis.label,
        notation: analysis.notation,
        suggestions: {
          create: analysis.suggestions.map((suggestion) => ({
            suggestion: suggestion,
          })),
        },
      },
    })
  }
}

interface PromptOptions {
  platform: Platform
  postContent: string
  objective: Objective
  persona: Persona
}
const generatePrompt = ({
  platform,
  postContent,
  objective,
  persona,
}: PromptOptions) => {
  return `
    Analyse the following post:
    
    ${postContent}

    The platform is ${platform}, the targeted persona is ${persona} and the objective is to ${objective}.

    For the provided post, return a json object with a notation from 0 to 10, 10 being perfect in its category, and a suggestions array that provide actionable insights with examples when applicable. Use harsh notation, be blunt in your suggestions.

    The data structure should be:
    [
      { label: "Tone Analysis", notation: <some number from 0 to 10>, suggestions: ["improve this", "improve that"] }
    ]

    Do that for the following categories:
    Tone Analysis
    Readability Score
    Text Length Check
    Paragraph and Sentence Structure
    Persona Alignment
    Platform-Specific Language
    Objective Alignment Check
    Engagement Potential
    Hashtag Suggestions
    Clarity and Specificity
    Grammar and Spelling Check
    Buzzword and Cliché Detector
    Sentiment Analysis
  `
}
