import { Analysis } from '@/store/features/post/slice'

export const analysisToDescriptionMapper = {
  [Analysis.ToneAnalysis]:
    "Evaluates the style and mood of the post to ensure it aligns with the audience's expectations and the platform’s professional environment.",
  [Analysis.ReadabilityScore]:
    'Measures how easily the text can be read and understood by the intended audience.',
  [Analysis.TextLengthCheck]:
    'Assesses if the post length is appropriate for platform guidelines and audience engagement.',
  [Analysis.ParagraphAndSentenceStructure]:
    'Reviews the organization of ideas and sentence flow for clarity and readability.',
  [Analysis.PersonaAlignment]:
    'Ensures the content resonates with the targeted audience or persona.',
  [Analysis.PlatformSpecificLanguage]:
    'Check,s that the language and style suit the norms and preferences of the chosen platform.',
  [Analysis.ObjectiveAlignmentCheck]:
    'Verifies if the content aligns with the primary goal, such as maximizing engagement or providing information.',
  [Analysis.EngagementPotential]:
    'Analyzes how likely the post is to inspire interaction, such as likes, comments, or shares.',
  [Analysis.HashtagSuggestions]:
    'Recommends relevant hashtags to increase visibility and reach.',
  [Analysis.ClarityAndSpecificity]:
    'Ensures the message is precise and easy for the audience to understand and act upon.',
  [Analysis.GrammarAndSpellingCheck]:
    'Examines the post for any grammar or spelling errors to maintain professionalism.',
  [Analysis.BuzzwordAndClichéDetector]:
    "Identifies any overused terms or clichés that may weaken the content's originality or clarity.",
  [Analysis.SentimentAnalysis]:
    'Determines the emotional tone of the content, such as positive, neutral, or negative, to match the intended impact.',
}
