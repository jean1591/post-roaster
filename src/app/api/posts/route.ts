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

    /* Analysis */
    // TODO: send post content and post params to openAi
    // TODO: save analysis in DB
    // TODO: return analysis with post

    return NextResponse.json(newPost)
  } catch (error) {
    console.error('Post creation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

/*
Analyse the following post:

${postContent}

The platform is ${platform}, the targeted persona is ${audience} and the objective is to ${objective}.

For the provided post, return a json object with a notation from 0 to 10, 10 being perfect in its category, and a suggestions array that provide actionable insights with examples when applicable. The data structure should be:
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
*/
