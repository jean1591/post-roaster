import { Analysis } from '@/store/features/post/slice'
import { DetailedAnalysis } from './DetailedAnalysis'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const AudienceAnaylis = () => {
  const { postAnalysis } = useSelector((state: RootState) => state.post)

  const personaAlignment = postAnalysis.find(
    ({ label }) => label === Analysis.ToneAnalysis
  )
  const platformSpecificLanguage = postAnalysis.find(
    ({ label }) => label === Analysis.PlatformSpecificLanguage
  )
  const objectiveAlignmentCheck = postAnalysis.find(
    ({ label }) => label === Analysis.ObjectiveAlignmentCheck
  )

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <DetailedAnalysis analysis={personaAlignment!} />
      <DetailedAnalysis analysis={platformSpecificLanguage!} />
      <DetailedAnalysis analysis={objectiveAlignmentCheck!} />
    </div>
  )
}
