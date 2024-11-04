import { Analysis } from '@/app/api/interfaces/post'
import { DetailedAnalysis } from './DetailedAnalysis'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const StructureAnaylis = () => {
  const { postAnalysis } = useSelector((state: RootState) => state.post)

  if (!postAnalysis) {
    return <></>
  }

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
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <DetailedAnalysis analysis={textLengthCheck!} />
      <DetailedAnalysis analysis={toneAnalysis!} />
      <DetailedAnalysis analysis={paragraphAndSentenceStructure!} />
      <DetailedAnalysis analysis={readabilityScore!} />
    </div>
  )
}
