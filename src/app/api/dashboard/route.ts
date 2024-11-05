import { Category, Notation } from '../interfaces/dashboard'
import { NextRequest, NextResponse } from 'next/server'
import { endpointFormatter, logger } from '../utils/logger'

import { Post } from '../interfaces/post'
import { Post as PostModel } from '@prisma/client'
import { getSession } from '../auth/[...nextauth]/authOptions'
import prisma from '@/lib/prisma'

export interface DashboardDto {
  posts: (Post & { notation: number })[]
  notation: Notation
}

interface Error {
  error: string
  data: unknown
}

export async function GET(
  request: NextRequest
): Promise<NextResponse<DashboardDto | Error>> {
  logger.info(endpointFormatter(request))

  const session = await getSession()

  if (!session) {
    console.error('Session not found')
    throw new Error('Session not found')
  }

  const {
    user: { id: userId },
  } = session

  const posts = await prisma.post.findMany({
    where: { userId },
  })

  const postNotations = await prisma.postAnalysis.groupBy({
    by: ['postId'],
    _avg: {
      notation: true,
    },
    where: { postId: { in: posts.map((post) => post.id) } },
  })

  const notation = await getCategoryAverages({
    postIds: posts.map((post) => post.id),
  })

  return NextResponse.json({
    posts: posts.map((post) => formatPost(post, postNotations)),
    notation,
  })
}

const formatPost = (
  post: PostModel,
  postNotations: { _avg: { notation: number | null }; postId: string }[]
): Post & { notation: number } => {
  const postNotation = postNotations.find(
    (notation) => notation.postId === post.id
  )

  return {
    id: post.id,
    content: post.content,
    createdAt: post.createdAt,
    objective: post.objective,
    notation: postNotation?._avg.notation ?? 0,
    persona: post.persona,
    platform: post.platform,
    updatedAt: post.updatedAt,
    userId: post.userId,
  }
}

const categories: Record<Category, string[]> = {
  audience: [
    'Persona Alignment',
    'Platform-Specific Language',
    'Objective Alignment Check',
  ],
  engagement: [
    'Engagement Potential',
    'Hashtag Suggestions',
    'Clarity and Specificity',
  ],
  language: [
    'Grammar and Spelling Check',
    'Buzzword and Cliché Detector',
    'Sentiment Analysis',
  ],
  structure: [
    'Text Length Check',
    'Tone Analysis',
    'Paragraph and Sentence Structure',
    'Readability Score',
  ],
}

const getCategoryAverages = async ({ postIds }: { postIds: string[] }) => {
  const categoryAverages: Notation = {
    audience: 0,
    engagement: 0,
    language: 0,
    structure: 0,
  }

  for (const [category, labels] of Object.entries(categories)) {
    const result = await prisma.postAnalysis.aggregate({
      where: {
        label: {
          in: labels,
        },
        postId: { in: postIds },
      },
      _avg: {
        notation: true,
      },
    })

    categoryAverages[category as Category] = parseFloat(
      (result._avg.notation ?? 0)?.toFixed(2)
    )
  }

  return categoryAverages
}
