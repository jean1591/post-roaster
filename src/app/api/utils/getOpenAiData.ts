import OpenAI from 'openai'
import { PostAnalysis } from '../interfaces/post'
import { logger } from './logger'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export const getOpenAiData = async (prompt: string): Promise<PostAnalysis> => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: prompt }],
    model: 'gpt-4o-mini',
    response_format: { type: 'json_object' },
  })

  const { content: analysis } = completion.choices[0].message

  if (!analysis) {
    logger.error('OpenAI returned no content', { completion })
    throw new Error('OpenAI returned no content')
  }

  return JSON.parse(analysis)
}
