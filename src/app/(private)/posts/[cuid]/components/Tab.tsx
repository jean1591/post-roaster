'use client'

import { AudienceAnaylis } from './AudienceAnalysis'
import { EngagementAnaylis } from './EngagementAnalysis'
import { LanguageAnaylis } from './LanguageAnalysis'
import { Results } from './Results'
import { RootState } from '@/store/store'
import { StructureAnaylis } from './StructureAnalysis'
import { Tab as TabEnum } from '@/store/features/post/slice'
import { useSelector } from 'react-redux'

export const Tab = () => {
  const { tab } = useSelector((state: RootState) => state.post)

  return (
    <div>
      {tab === TabEnum.Summary && <Results />}
      {tab === TabEnum.Audience && <AudienceAnaylis />}
      {tab === TabEnum.Engagement && <EngagementAnaylis />}
      {tab === TabEnum.Language && <LanguageAnaylis />}
      {tab === TabEnum.Structure && <StructureAnaylis />}
    </div>
  )
}
