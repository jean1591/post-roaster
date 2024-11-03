import OpenAI from 'openai'

type Completion = OpenAI.Chat.Completions.ChatCompletion

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export const getOpenAiData = async (prompt: string): Promise<Completion> => {
  let completion: Completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      {
        role: 'user',
        content: prompt,
      },
    ],
  })

  console.info(JSON.stringify(completion, null, 2))

  return completion
}
