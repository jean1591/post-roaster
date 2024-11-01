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

const postAnalysis = [
  {
    label: Analysis.ToneAnalysis,
    notation: 8,
    suggestions: [
      'Add phrases to enhance friendliness',
      'Consider a more conversational opening',
    ],
  },
  {
    label: Analysis.ReadabilityScore,
    notation: 8,
    suggestions: [
      'Shorten some sentences',
      'Use simpler language for broader accessibility',
    ],
  },
  {
    label: Analysis.TextLengthCheck,
    notation: 9,
    suggestions: ['None needed; length is appropriate for engagement'],
  },
  {
    label: Analysis.ParagraphAndSentenceStructure,
    notation: 8,
    suggestions: [
      'Add line breaks between steps for better flow',
      'Consider separate lines for the opening question',
    ],
  },
  {
    label: Analysis.PersonaAlignment,
    notation: 9,
    suggestions: ['Include examples relevant to specific professional roles'],
  },
  {
    label: Analysis.PlatformSpecificLanguage,
    notation: 9,
    suggestions: [
      'Incorporate more industry-specific terminology to enhance credibility',
    ],
  },
  {
    label: Analysis.ObjectiveAlignmentCheck,
    notation: 9,
    suggestions: ['Reinforce the call to action for engagement'],
  },
  {
    label: Analysis.EngagementPotential,
    notation: 8,
    suggestions: [
      'Encourage readers to share their experiences with GSC',
      'Include a question at the end to prompt comments',
    ],
  },
  {
    label: Analysis.HashtagSuggestions,
    notation: 7,
    suggestions: [
      'Add more relevant hashtags',
      'Consider trending hashtags in the SEO community',
    ],
  },
  {
    label: Analysis.ClarityAndSpecificity,
    notation: 9,
    suggestions: [
      'Provide a brief example of indexing success',
      'Clarify technical terms for beginners',
    ],
  },
  {
    label: Analysis.GrammarAndSpellingCheck,
    notation: 10,
    suggestions: ['None; grammar and spelling are accurate'],
  },
  {
    label: Analysis.BuzzwordAndClichéDetector,
    notation: 8,
    suggestions: [
      "Avoid phrases like 'take your SEO to the next level'",
      'Replace clichés with specific examples or results',
    ],
  },
  {
    label: Analysis.SentimentAnalysis,
    notation: 9,
    suggestions: [
      'Maintain the positive tone throughout',
      'Consider adding more motivational language',
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
  postAnalysis: { label: Analysis; notation: number; suggestions: string[] }[]
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
