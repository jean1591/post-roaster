import { NextResponse } from 'next/server'
import { getSession } from '../auth/[...nextauth]/authOptions'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
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

    const { objective, persona, platform, postText } = await req.json()
    const newPost = await prisma.post.create({
      data: { objective, persona, platform, content: postText, userId },
    })
    console.log('🚀 ~ POST ~ newPost:', newPost)

    return NextResponse.json(newPost)
  } catch (error) {
    console.error('Post creation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
