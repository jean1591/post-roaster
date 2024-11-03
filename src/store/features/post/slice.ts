import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Post } from '@prisma/client'

export enum Analysis {
  BuzzwordAndClichéDetector = 'Buzzword and Cliché Detector',
  ClarityAndSpecificity = 'Clarity and Specificity',
  EngagementPotential = 'Engagement Potential',
  GrammarAndSpellingCheck = 'Grammar and Spelling Check',
  HashtagSuggestions = 'Hashtag Suggestions',
  ObjectiveAlignmentCheck = 'Objective Alignment Check',
  ParagraphAndSentenceStructure = 'Paragraph and Sentence Structure',
  PersonaAlignment = 'Persona Alignment',
  PlatformSpecificLanguage = 'Platform-Specific Language',
  ReadabilityScore = 'Readability Score',
  SentimentAnalysis = 'Sentiment Analysis',
  TextLengthCheck = 'Text Length Check',
  ToneAnalysis = 'Tone Analysis',
}

interface PostAnalysis {
  label: Analysis
  notation: number
  suggestions: string[]
}

const postAnalysis: PostAnalysis[] = [
  {
    label: 'Tone Analysis',
    notation: 8,
    suggestions: [
      "Make the tone slightly more personable by using conversational language, like 'Let’s dive into how you can make Google work for you!'",
      "Incorporate encouragement, such as 'Start seeing the benefits of GSC today!' to increase relatability and boost engagement.",
    ],
  },
  {
    label: 'Readability Score',
    notation: 9,
    suggestions: [
      'To improve readability, break down instructions into bullet points for clarity (already done well in this post).',
      'Consider reducing the technical jargon slightly for users who may be new to SEO.',
    ],
  },
  {
    label: 'Text Length Check',
    notation: 7,
    suggestions: [
      "The post could be slightly shortened, as LinkedIn audiences often prefer quick reads. For example, condense the introduction: 'Want better SEO? Start with Google Search Console!'",
      'Remove redundant words or phrases to make the message more concise.',
    ],
  },
  {
    label: 'Paragraph and Sentence Structure',
    notation: 8,
    suggestions: [
      "Use shorter sentences in the introduction to improve readability: 'Looking to improve your SEO? Google Search Console (GSC) can help!'",
      'Consider adding spacing between points to make skimming easier, particularly for mobile viewers.',
    ],
  },
  {
    label: 'Persona Alignment',
    notation: 9,
    suggestions: [
      "To better match a professional audience, mention potential business outcomes like 'drive more traffic' or 'increase visibility for your brand'.",
      "Add examples or industry relevance for users in marketing or digital roles, e.g., 'Ideal for marketers looking to boost brand presence online.'",
    ],
  },
  {
    label: 'Platform-Specific Language',
    notation: 7,
    suggestions: [
      "Use LinkedIn-friendly phrases like 'boost your professional SEO knowledge with these steps' to cater to career-minded audiences.",
      "Consider adding a call to action that encourages networking, e.g., 'Let’s connect and share SEO tips!'",
    ],
  },
  {
    label: 'Objective Alignment Check',
    notation: 9,
    suggestions: [
      "To drive engagement, add an open-ended question at the end, like 'What SEO challenges have you faced?'",
      "Encourage interaction by inviting comments or feedback, e.g., 'Share your thoughts on using GSC below!'",
    ],
  },
  {
    label: 'Engagement Potential',
    notation: 8,
    suggestions: [
      'Consider adding a poll or link to a related article for additional engagement.',
      'Add an emoji callout for each point (🔹, ✅) to increase visual appeal and draw attention.',
    ],
  },
  {
    label: 'Hashtag Suggestions',
    notation: 6,
    suggestions: [
      'Include relevant hashtags like #SEO, #GoogleSearchConsole, #DigitalMarketing, #LinkedInLearning to increase reach.',
      'Limit to 3-5 hashtags to avoid overwhelming the audience.',
    ],
  },
  {
    label: 'Clarity and Specificity',
    notation: 9,
    suggestions: [
      "The instructions are clear, but adding a quick summary like 'Start indexing, submit sitemaps, and monitor your progress' at the end could improve clarity further.",
      "For new users, briefly explain key terms, e.g., 'URL Inspection allows you to check how Google views individual pages.'",
    ],
  },
  {
    label: 'Grammar and Spelling Check',
    notation: 10,
    suggestions: [
      'No spelling or grammar issues detected. The post is clear and professionally written.',
    ],
  },
  {
    label: 'Buzzword and Cliché Detector',
    notation: 7,
    suggestions: [
      "Reduce usage of buzzwords like 'powerful tool' by replacing with specific benefits, e.g., 'GSC helps you get noticed by Google quickly and efficiently.'",
      "Consider simplifying phrases like 'take your SEO to the next level' to something more unique and personalized, like 'optimize your site for Google.'",
    ],
  },
  {
    label: 'Sentiment Analysis',
    notation: 9,
    suggestions: [
      "The positive and motivational tone is strong. Adding a final sentence to express excitement could strengthen it further, e.g., 'Let’s get started on improving your site’s performance!'",
      "Make the benefits sound more immediate to enhance positivity, e.g., 'With just a few steps, start seeing results!'",
    ],
  },
]

export enum Tab {
  Audience = 'Audience',
  Engagement = 'Engagement',
  Language = 'Language',
  Structure = 'Structure',
  Summary = 'Summary',
}

export interface PostSlice {
  postAnalysis: PostAnalysis[]
  post: Post | null
  tab: Tab
}

const initialState: PostSlice = {
  postAnalysis,
  post: null,
  tab: Tab.Summary,
}

export const createPostSlice = createSlice({
  name: 'createPostSlice',
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<Post>) => {
      state.post = action.payload
    },
    setTab: (state, action: PayloadAction<Tab>) => {
      state.tab = action.payload
    },
  },
})

export const { setPost, setTab } = createPostSlice.actions

export default createPostSlice.reducer
