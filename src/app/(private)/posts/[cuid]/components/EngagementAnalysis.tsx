import { Analysis } from '@/app/api/interfaces/post'
import { DetailedAnalysis } from './DetailedAnalysis'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const EngagementAnaylis = () => {
  const { postAnalysis } = useSelector((state: RootState) => state.post)

  if (!postAnalysis) {
    return <></>
  }

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
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <DetailedAnalysis analysis={engagementPotential!} />
      <DetailedAnalysis analysis={hashtagSuggestions!} />
      <DetailedAnalysis analysis={clarityAndSpecificity!} />
    </div>
  )
}
