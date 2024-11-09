'use client'

import { Analysis, AnalysisItem } from '@/app/api/interfaces/post'

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
    <div className="space-y-8">
      {/* METRICS */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Result label={'Audience'} results={audienceResults} />
        <Result label={'Engagement'} results={engagementResults} />
        <Result label={'Language'} results={languageResults} />
        <Result label={'Structure'} results={structureResults} />
      </div>

      {/* MESSAGE */}
      <div className="space-y-4 rounded-md border-[1px] border-black p-4">
        <p className="text-xl font-bold tracking-tighter">Message</p>
        <p className="tracking-tighter">{postAnalysis.message}</p>
      </div>

      {/* CREDIBILITY */}
      <div className="space-y-4 rounded-md border-[1px] border-black p-4">
        <div className="items-between flex justify-between gap-4">
          <p className="text-xl font-bold tracking-tighter">Credibility</p>
          <p className="text-xl font-bold tracking-tighter">
            {postAnalysis.credibility.value}%
          </p>
        </div>

        <p className="tracking-tighter">{postAnalysis.credibility.message}</p>
      </div>
    </div>
  )
}

const Result = ({
  label,
  results,
}: {
  label: string
  results: (AnalysisItem | undefined)[]
}) => {
  return (
    <div className="space-y-4 rounded-md border-[1px] border-black p-4">
      <p className="text-xl font-bold tracking-tighter">{label}</p>
      <div className="flex items-center justify-between">
        {results.map((result) => (
          <div key={result?.label}>
            <p className="text-lg font-bold tracking-tight">
              {result?.notation}/10
            </p>
            <p className="text-xs text-slate-600">
              {result?.label.split(' ')[0]}
            </p>
          </div>
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
