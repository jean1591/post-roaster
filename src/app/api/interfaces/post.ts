export interface Post {
  id: string
  content: string
  createdAt: Date
  objective: string
  persona: string
  platform: string
  updatedAt: Date
  userId: string
}

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

export interface PostAnalysis {
  label: Analysis
  notation: number
  suggestions: string[]
}