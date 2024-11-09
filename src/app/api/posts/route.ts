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
    const { objective, persona, platform, postContent } = await request.json()
    const newPost = await validatePost({
      objective,
      persona,
      platform,
      postContent,
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
}
const validatePost = async ({
  objective,
  persona,
  platform,
  postContent,
}: PostDetails) => {
  const newPost = await prisma.post.create({
    data: {
      objective,
      persona,
      platform,
      content: postContent,
    },
  })

  const prompt = generatePrompt({ objective, persona, platform, postContent })
  const completion = await getOpenAiData(prompt)
  const postAnalysis = openAiResponseToJsonFormatter(
    completion.choices[0].message.content ?? '{}'
  )

  await savePostAnalysis(newPost.id, postAnalysis)
  await savePostCredibility(postAnalysis.credibility, newPost.id)
  await savePostMessage(postAnalysis.message, newPost.id)

  return newPost
}

async function savePostAnalysis(postId: string, postAnalysis: PostAnalysis) {
  const { analysis } = postAnalysis

  for (const analysisItem of analysis) {
    await prisma.postAnalysis.create({
      data: {
        postId: postId,
        label: analysisItem.label,
        notation: analysisItem.notation,
        suggestions: {
          create: analysisItem.suggestions.map((suggestion) => ({
            suggestion: suggestion,
          })),
        },
      },
    })
  }
}

const savePostCredibility = async (
  credibility: {
    value: number
    message: string
  },
  postId: string
) => {
  await prisma.credibility.create({
    data: {
      postId: postId,
      message: credibility.message,
      value: credibility.value,
    },
  })
}

const savePostMessage = async (message: string, postId: string) => {
  await prisma.message.create({
    data: {
      postId: postId,
      message,
    },
  })
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
    {
      credibility: {
        value: number, from 0 to 100, 100 being completely true
        message: string, an explanation why the score is not at 100
      }
      message: string, a one sentence summary of the post
      analysis: [
        { label: "Tone Analysis", notation: <some number from 0 to 10>, suggestions: ["improve this", "improve that"] }
      ]
    }
        
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
