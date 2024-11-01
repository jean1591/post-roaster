import { NextRequest, NextResponse } from 'next/server'
import { endpointFormatter, logger } from '../../utils/logger'

import { Post } from '@prisma/client'
import { getSession } from '../../auth/[...nextauth]/authOptions'
import prisma from '@/lib/prisma'

export interface PostDto {
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
  console.log(params.cuid)
  logger.info(endpointFormatter(request))

  const session = await getSession()

  if (!session) {
    console.error('The user has no session')
    throw new Error('The user has no session')
  }

  const {
    user: { id: userId },
  } = session

  const post = await prisma.post.findUnique({ where: { id: params.cuid } })

  if (!post) {
    return NextResponse.json(
      { error: 'Post not found', data: { postId: params.cuid, userId } },
      { status: 404 }
    )
  }

  if (post.userId !== userId) {
    return NextResponse.json(
      { error: 'Unauthorized access to post', data: { post, userId } },
      { status: 403 }
    )
  }

  return NextResponse.json({ post })
}
