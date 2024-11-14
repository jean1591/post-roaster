import { NextRequest, NextResponse } from 'next/server'
import { Objective, Persona, Platform } from '@/store/features/createPost/slice'
import { Post, PostAnalysis } from '../interfaces/post'
import { endpointFormatter, logger } from '../utils/logger'

import { getOpenAiData } from '../utils/getOpenAiData'
import prisma from '@/lib/prisma'

export interface CreatePostDto {
  post: Post
  postAnalysis: PostAnalysis
}

interface Error {
  error: string
  data: unknown
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<CreatePostDto | Error>> {
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
      {
        error: 'Post creation error',
        data: {},
      },
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
}: PostDetails): Promise<CreatePostDto> => {
  const post = await prisma.post.create({
    data: {
      objective,
      persona,
      platform,
      content: postContent,
    },
  })

  const prompt = generatePrompt({ objective, persona, platform, postContent })
  const postAnalysis = await getOpenAiData(prompt)

  return {
    post,
    postAnalysis,
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

    For the provided post, return a json object with a notation from 0 to 10 (10 being perfect in its category) and a suggestions array providing actionable insights with examples when applicable. Use harsh notation and be blunt in your suggestions. Include a textSuggestions array where each suggestion object must correspond to the order of appearance in the original text - the first suggestion should reference text from the beginning of the post, and subsequent suggestions should follow the text's chronological order.
    
    The data structure should be:
    {
      credibility: {
        value: number, from 0 to 100, 100 being completely true
        message: string, an explanation why the score is not at 100
      }
      message: string, a one sentence summary of the post
      analysis: [
        { label: "Tone Analysis", notation: <some number from 0 to 10>, suggestions: ["improve this", "improve that"] }
      ],
      textSuggestions: [
        {
          phrase: string, // the phrase that is not good
          issue: string, // the issue with the phrase
          examples: string[] // phrases that are better alternatives
        }
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
