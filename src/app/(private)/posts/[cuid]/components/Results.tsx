'use client'

import { Analysis, AnalysisItem } from '@/app/api/interfaces/post'

import { Result } from './Result'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const Results = () => {
  const { postAnalysis } = useSelector((state: RootState) => state.post)

  if (!postAnalysis) {
    return <></>
  }

  const {
    audienceResults,
    engagementResults,
    languageResults,
    structureResults,
  } = extractCategories(postAnalysis.analysis)

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <ResultsCard label="Audience Alignment" results={audienceResults} />
      <ResultsCard
        label="Engagement Optimization"
        results={engagementResults}
      />
      <ResultsCard label="Language Quality" results={languageResults} />
      <ResultsCard label="Content Structure" results={structureResults} />
    </div>
  )
}

const ResultsCard = ({
  label,
  results,
}: {
  label: string
  results: (AnalysisItem | undefined)[]
}) => {
  return (
    <div className="space-y-4 rounded-md border-[1px] border-slate-200 p-4 shadow-sm">
      <h3 className="tracking-tigh text-lg font-bold leading-none">{label}</h3>

      <div className="space-y-2">
        {results.map((result) => (
          <Result
            key={result?.label}
            label={result?.label ?? ''}
            value={result?.notation ?? 0}
          />
        ))}
      </div>
    </div>
  )
}

const extractCategories = (
  analysis: AnalysisItem[]
): {
  audienceResults: (AnalysisItem | undefined)[]
  engagementResults: (AnalysisItem | undefined)[]
  languageResults: (AnalysisItem | undefined)[]
  structureResults: (AnalysisItem | undefined)[]
} => {
  /* Audience */
  const personaAlignment = analysis.find(
    ({ label }) => label === Analysis.PersonaAlignment
  )
  const platformSpecificLanguage = analysis.find(
    ({ label }) => label === Analysis.PlatformSpecificLanguage
  )
  const objectiveAlignmentCheck = analysis.find(
    ({ label }) => label === Analysis.ObjectiveAlignmentCheck
  )

  const audienceResults = [
    personaAlignment,
    platformSpecificLanguage,
    objectiveAlignmentCheck,
  ]

  /* Engagement */
  const engagementPotential = analysis.find(
    ({ label }) => label === Analysis.EngagementPotential
  )
  const hashtagSuggestions = analysis.find(
    ({ label }) => label === Analysis.HashtagSuggestions
  )
  const clarityAndSpecificity = analysis.find(
    ({ label }) => label === Analysis.ClarityAndSpecificity
  )

  const engagementResults = [
    engagementPotential,
    hashtagSuggestions,
    clarityAndSpecificity,
  ]

  /* Language */
  const grammarAndSpellingCheck = analysis.find(
    ({ label }) => label === Analysis.GrammarAndSpellingCheck
  )
  const buzzwordAndClichéDetector = analysis.find(
    ({ label }) => label === Analysis.BuzzwordAndClichéDetector
  )
  const sentimentAnalysis = analysis.find(
    ({ label }) => label === Analysis.SentimentAnalysis
  )

  const languageResults = [
    grammarAndSpellingCheck,
    buzzwordAndClichéDetector,
    sentimentAnalysis,
  ]

  /* Structure */
  const textLengthCheck = analysis.find(
    ({ label }) => label === Analysis.TextLengthCheck
  )
  const toneAnalysis = analysis.find(
    ({ label }) => label === Analysis.ToneAnalysis
  )
  const paragraphAndSentenceStructure = analysis.find(
    ({ label }) => label === Analysis.ParagraphAndSentenceStructure
  )
  const readabilityScore = analysis.find(
    ({ label }) => label === Analysis.ReadabilityScore
  )

  const structureResults = [
    textLengthCheck,
    toneAnalysis,
    paragraphAndSentenceStructure,
    readabilityScore,
  ]

  return {
    audienceResults,
    engagementResults,
    languageResults,
    structureResults,
  }
}
