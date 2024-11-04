import { Analysis } from '@/app/api/interfaces/post'
import { DetailedAnalysis } from './DetailedAnalysis'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const AudienceAnaylis = () => {
  const { postAnalysis } = useSelector((state: RootState) => state.post)

  if (!postAnalysis) {
    return <></>
  }

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
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <DetailedAnalysis analysis={personaAlignment!} />
      <DetailedAnalysis analysis={platformSpecificLanguage!} />
      <DetailedAnalysis analysis={objectiveAlignmentCheck!} />
    </div>
  )
}
