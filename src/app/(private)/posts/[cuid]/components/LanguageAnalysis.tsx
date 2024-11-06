import { Analysis } from '@/app/api/interfaces/post'
import { DetailedAnalysis } from './DetailedAnalysis'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const LanguageAnaylis = () => {
  const { postAnalysis } = useSelector((state: RootState) => state.post)

  if (!postAnalysis) {
    return <></>
  }

  const grammarAndSpellingCheck = postAnalysis.analysis.find(
    ({ label }) => label === Analysis.GrammarAndSpellingCheck
  )
  const buzzwordAndClichéDetector = postAnalysis.analysis.find(
    ({ label }) => label === Analysis.BuzzwordAndClichéDetector
  )
  const sentimentAnalysis = postAnalysis.analysis.find(
    ({ label }) => label === Analysis.SentimentAnalysis
  )

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <DetailedAnalysis analysis={grammarAndSpellingCheck!} />
      <DetailedAnalysis analysis={buzzwordAndClichéDetector!} />
      <DetailedAnalysis analysis={sentimentAnalysis!} />
    </div>
  )
}
