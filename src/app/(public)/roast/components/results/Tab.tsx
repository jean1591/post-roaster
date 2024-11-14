'use client'

import { AudienceAnaylis } from './AudienceAnalysis'
import { ContentAnalysis } from './ContentAnalysis'
import { EngagementAnaylis } from './EngagementAnalysis'
import { LanguageAnaylis } from './LanguageAnalysis'
import { Results } from './Results'
import { RootState } from '@/store/store'
import { StructureAnalysis } from './StructureAnalysis'
import { Tab as TabEnum } from '@/store/features/post/slice'
import { useSelector } from 'react-redux'

export const Tab = () => {
  const { postAnalysis, tab } = useSelector((state: RootState) => state.post)

  if (!postAnalysis) {
    return <></>
  }

  return (
    <div>
      {tab === TabEnum.Summary && <Results />}
      {tab === TabEnum.Content && <ContentAnalysis />}
      {tab === TabEnum.Audience && <AudienceAnaylis />}
      {tab === TabEnum.Engagement && <EngagementAnaylis />}
      {tab === TabEnum.Language && <LanguageAnaylis />}
      {tab === TabEnum.Structure && <StructureAnalysis />}
    </div>
  )
}
