import { Analysis } from '@/app/api/interfaces/post'
import { Result } from './Result'
import { analysisToDescriptionMapper } from '@/app/mappers/analysis'

export const DetailedAnalysis = ({
  analysis,
}: {
  analysis: { label: Analysis; notation: number; suggestions: string[] }
}) => {
  const { label, notation, suggestions } = analysis

  return (
    <div className="space-y-4 rounded-md border-[1px] border-slate-200 p-4">
      <div className="space-y-2">
        <h3 className="font-bold leading-none tracking-tight">{label}</h3>
        <p className="text-sm text-slate-500">
          {analysisToDescriptionMapper[label]}
        </p>

        <Result label="" value={notation ?? 0} />
      </div>

      <div>
        <p className="space-y-2 font-bold tracking-tight">Suggestions :</p>

        {suggestions.map((suggestion) => (
          <p key={suggestion} className="text-sm">
            - {suggestion}
          </p>
        ))}
      </div>
    </div>
  )
}
