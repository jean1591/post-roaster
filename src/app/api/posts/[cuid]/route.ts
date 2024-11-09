import { Analysis, Post, PostAnalysis } from '../../interfaces/post'
import { NextRequest, NextResponse } from 'next/server'
import { endpointFormatter, logger } from '../../utils/logger'

import { Prisma } from '@prisma/client'
import prisma from '@/lib/prisma'

type PostWithAnalysisAndSuggestions = Prisma.PostGetPayload<{
  include: {
    postAnalysis: {
      include: {
        suggestions: true
      }
    }
    credibility: true
    message: true
  }
}>

export interface PostDto {
  postAnalysis: PostAnalysis
  post: Post
}

interface Error {
  error: string
  data: unknown
}

export async function GET(
  request: NextRequest,
  { params }: { params: { cuid: string } }
): Promise<NextResponse<PostDto | Error>> {
  logger.info(endpointFormatter(request))

  const post = (await prisma.post.findUnique({
    where: { id: params.cuid },
    include: {
      postAnalysis: { include: { suggestions: true } },
      message: true,
      credibility: true,
    },
  })) as PostWithAnalysisAndSuggestions

  if (!post) {
    return NextResponse.json(
      { error: 'Post not found', data: { postId: params.cuid } },
      { status: 404 }
    )
  }

  return NextResponse.json({
    post: formatPost(post),
    postAnalysis: formatPostAnalysis(post),
  })
}

const formatPost = (post: PostWithAnalysisAndSuggestions): Post => {
  return {
    id: post.id,
    content: post.content,
    createdAt: post.createdAt,
    objective: post.objective,
    persona: post.persona,
    platform: post.platform,
    updatedAt: post.updatedAt,
  }
}

const formatPostAnalysis = ({
  credibility,
  message,
  postAnalysis,
}: PostWithAnalysisAndSuggestions): PostAnalysis => {
  return {
    credibility: {
      message: credibility?.message ?? '',
      value: credibility?.value ?? 0,
    },
    message: message?.message ?? '',
    analysis: postAnalysis.map(({ label, notation, suggestions }) => ({
      label: label as Analysis,
      notation,
      suggestions: suggestions.map(({ suggestion }) => suggestion),
    })),
  }
}
