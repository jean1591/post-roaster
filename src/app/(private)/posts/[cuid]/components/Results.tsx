'use client'

import { Analysis } from '@/store/features/post/slice'
import { Result } from './Result'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const Results = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <AudienceAlignment />
      <EngagementOptimization />
      <LanguageQuality />
      <ContentStructure />
    </div>
  )
}

const ContentStructure = () => {
  const { postAnalysis } = useSelector((state: RootState) => state.post)

  const textLengthCheck = postAnalysis.find(
    ({ label }) => label === Analysis.TextLengthCheck
  )
  const toneAnalysis = postAnalysis.find(
    ({ label }) => label === Analysis.ToneAnalysis
  )
  const paragraphAndSentenceStructure = postAnalysis.find(
    ({ label }) => label === Analysis.ParagraphAndSentenceStructure
  )
  const readabilityScore = postAnalysis.find(
    ({ label }) => label === Analysis.ReadabilityScore
  )

  return (
    <div className="space-y-4 rounded-md border-[1px] border-slate-200 p-4 shadow-sm">
      <h3 className="tracking-tigh text-lg font-bold leading-none">
        Content Structure
      </h3>

      <div className="space-y-2">
        <Result
          label={toneAnalysis?.label ?? ''}
          value={toneAnalysis?.notation ?? 0}
        />
        <Result
          label={textLengthCheck?.label ?? ''}
          value={textLengthCheck?.notation ?? 0}
        />
        <Result
          label={paragraphAndSentenceStructure?.label ?? ''}
          value={paragraphAndSentenceStructure?.notation ?? 0}
        />
        <Result
          label={readabilityScore?.label ?? ''}
          value={readabilityScore?.notation ?? 0}
        />
      </div>
    </div>
  )
}

const AudienceAlignment = () => {
  const { postAnalysis } = useSelector((state: RootState) => state.post)

  const personaAlignment = postAnalysis.find(
    ({ label }) => label === Analysis.PersonaAlignment
  )
  const platformSpecificLanguage = postAnalysis.find(
    ({ label }) => label === Analysis.PlatformSpecificLanguage
  )
  const objectiveAlignmentCheck = postAnalysis.find(
    ({ label }) => label === Analysis.ObjectiveAlignmentCheck
  )

  return (
    <div className="space-y-4 rounded-md border-[1px] border-slate-200 p-4 shadow-sm">
      <h3 className="tracking-tigh text-lg font-bold leading-none">
        Audience Alignment
      </h3>

      <div className="space-y-2">
        <Result
          label={personaAlignment?.label ?? ''}
          value={personaAlignment?.notation ?? 0}
        />
        <Result
          label={platformSpecificLanguage?.label ?? ''}
          value={platformSpecificLanguage?.notation ?? 0}
        />
        <Result
          label={objectiveAlignmentCheck?.label ?? ''}
          value={objectiveAlignmentCheck?.notation ?? 0}
        />
      </div>
    </div>
  )
}

const EngagementOptimization = () => {
  const { postAnalysis } = useSelector((state: RootState) => state.post)

  const engagementPotential = postAnalysis.find(
    ({ label }) => label === Analysis.EngagementPotential
  )
  const hashtagSuggestions = postAnalysis.find(
    ({ label }) => label === Analysis.HashtagSuggestions
  )
  const clarityAndSpecificity = postAnalysis.find(
    ({ label }) => label === Analysis.ClarityAndSpecificity
  )

  return (
    <div className="space-y-4 rounded-md border-[1px] border-slate-200 p-4 shadow-sm">
      <h3 className="tracking-tigh text-lg font-bold leading-none">
        Engagement Optimization
      </h3>

      <div className="space-y-2">
        <Result
          label={engagementPotential?.label ?? ''}
          value={engagementPotential?.notation ?? 0}
        />
        <Result
          label={hashtagSuggestions?.label ?? ''}
          value={hashtagSuggestions?.notation ?? 0}
        />
        <Result
          label={clarityAndSpecificity?.label ?? ''}
          value={clarityAndSpecificity?.notation ?? 0}
        />
      </div>
    </div>
  )
}

const LanguageQuality = () => {
  const { postAnalysis } = useSelector((state: RootState) => state.post)

  const grammarAndSpellingCheck = postAnalysis.find(
    ({ label }) => label === Analysis.GrammarAndSpellingCheck
  )
  const buzzwordAndClichéDetector = postAnalysis.find(
    ({ label }) => label === Analysis.BuzzwordAndClichéDetector
  )
  const sentimentAnalysis = postAnalysis.find(
    ({ label }) => label === Analysis.SentimentAnalysis
  )

  return (
    <div className="space-y-4 rounded-md border-[1px] border-slate-200 p-4 shadow-sm">
      <h3 className="tracking-tigh text-lg font-bold leading-none">
        Language Quality
      </h3>

      <div className="space-y-2">
        <Result
          label={grammarAndSpellingCheck?.label ?? ''}
          value={grammarAndSpellingCheck?.notation ?? 0}
        />
        <Result
          label={buzzwordAndClichéDetector?.label ?? ''}
          value={buzzwordAndClichéDetector?.notation ?? 0}
        />
        <Result
          label={sentimentAnalysis?.label ?? ''}
          value={sentimentAnalysis?.notation ?? 0}
        />
      </div>
    </div>
  )
}
