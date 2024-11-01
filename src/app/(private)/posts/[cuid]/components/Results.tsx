import { Result } from './Result'

export const Results = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <ContentStructure />
      <AudienceAlignment />
      <EngagementOptimization />
      <LanguageQuality />
    </div>
  )
}

const ContentStructure = () => {
  return (
    <div className="space-y-4 rounded-md border-[1px] border-slate-200 p-4 shadow-sm">
      <h3 className="tracking-tigh text-lg font-bold leading-none">
        Content Structure
      </h3>

      <div className="space-y-2">
        <Result label="Tone Analysis" value={4} />
        <Result label="Readability Score" value={7} />
        <Result label="Text Length Check" value={6} />
        <Result label="Paragraph and Sentence Structure" value={9} />
      </div>
    </div>
  )
}

const AudienceAlignment = () => {
  return (
    <div className="space-y-4 rounded-md border-[1px] border-slate-200 p-4 shadow-sm">
      <h3 className="tracking-tigh text-lg font-bold leading-none">
        Audience Alignment
      </h3>

      <div className="space-y-2">
        <Result label="Persona Alignment" value={6} />
        <Result label="Platform-Specific Language" value={4} />
        <Result label="Objective Alignment Check" value={8} />
      </div>
    </div>
  )
}

const EngagementOptimization = () => {
  return (
    <div className="space-y-4 rounded-md border-[1px] border-slate-200 p-4 shadow-sm">
      <h3 className="tracking-tigh text-lg font-bold leading-none">
        Engagement Optimization
      </h3>

      <div className="space-y-2">
        <Result label="Engagement Potential" value={2} />
        <Result label="Hashtag Suggestions" value={6} />
        <Result label="Clarity and Specificity" value={7} />
      </div>
    </div>
  )
}

const LanguageQuality = () => {
  return (
    <div className="space-y-4 rounded-md border-[1px] border-slate-200 p-4 shadow-sm">
      <h3 className="tracking-tigh text-lg font-bold leading-none">
        Language Quality
      </h3>

      <div className="space-y-2">
        <Result label="Grammar and Spelling Check" value={6} />
        <Result label="Buzzword and Cliché Detector" value={5} />
        <Result label="Sentiment Analysis" value={5} />
      </div>
    </div>
  )
}
