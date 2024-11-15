import { NextRequest, NextResponse } from 'next/server'
import { Objective, Persona, Platform } from '@/store/features/createPost/slice'
import { Post, PostAnalysis } from '../interfaces/post'
import { endpointFormatter, logger } from '../utils/logger'

import fs from 'fs'
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
  fs.writeFileSync('postAnalysis.json', JSON.stringify(postAnalysis, null, 2))

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
  return `As a ${platform} expert specializing in helping professionals maximize their presence and engagement on ${platform}, analyze the following post:

${postContent}

Target audience: ${persona}
Primary goal: ${objective}

Expected JSON Format:
{
  "credibility": {
    "value": number, // 0-100, where 100 is completely credible
    "message": string // explanation if the score is below 100
  },
  "message": string, // concise summary of the post's main idea
  "analysis": [
    {
      "label": string, // analysis category name
      "notation": number, // 0-10 rating, where 10 is perfect
      "suggestions": string[] // actionable, straightforward improvement tips
    }
  ],
  "textSuggestions": [
    {
      "phrase": string, // exact phrase from the post that could be improved (case-sensitive match)
      "issue": string, // specific issue with the phrase
      "examples": string[] // clear, copy-pasteable replacement suggestions that fit the tone and style
    }
  ]
}

Important Instructions for textSuggestions:
- textSuggestions must appear in the exact sequence that matches the phrases in the original post.
- Each entry in textSuggestions should directly reference phrases in the post, ordered strictly based on their appearance in the text. Do not rearrange or list them out of sequence.
- If the order of textSuggestions does not match the flow of the original text, the response will be considered incorrect. 


Scoring & Suggestions:
- Use a 0-10 notation (10 = perfect) for each category.
- Be direct and use blunt, actionable language in feedback.
- Respect the existing tone of the post, offering improvements that maintain or subtly enhance its current style.
- Focus on readability, engagement, and alignment with the target persona and ${platform}'s style.

Analyze the post on the following criteria:
1. Tone Analysis - Is the tone engaging and appropriate for the target persona?
2. Readability Score - Is the text easy to read, with concise sentences and bullet points?
3. Text Length Check - Is the length optimized for ${platform}?
4. Paragraph and Sentence Structure - Are paragraphs concise, with straightforward sentence structures?
5. Persona Alignment - Does the post resonate with the target audience?
6. Platform-Specific Language - Is the language suitable for ${platform}'s norms?
7. Objective Alignment Check - Does the post align with the intended goal?
8. Engagement Potential - Are there calls to action or engaging questions?
9. Hashtag Suggestions - Recommend relevant hashtags for reach.
10. Clarity and Specificity - Is the post clear and specific?
11. Grammar and Spelling Check - Identify any issues.
12. Buzzword and Cliché Detector - Flag overused phrases.
13. Sentiment Analysis - Does the tone convey the intended sentiment?

For each category, include practical feedback that can be immediately applied. Ensure all responses are in the same language as the original post.
`
}
