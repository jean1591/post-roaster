import { PostAnalysis } from '../interfaces/post'
import { isNil } from 'lodash'

export const openAiResponseToJsonFormatter = (
  content: string
): PostAnalysis => {
  const jsonMatch = content.match(/```json\n([\s\S]*?)\n```/)

  const response: PostAnalysis | null = jsonMatch
    ? JSON.parse(jsonMatch[1])
    : null

  if (response) {
    return response
  }

  const formattedContent: PostAnalysis = JSON.parse(content)
  if (!isNil(formattedContent)) {
    return formattedContent
  }

  console.error(content)
  throw new Error('An error occured during openAI response formatting')
}
