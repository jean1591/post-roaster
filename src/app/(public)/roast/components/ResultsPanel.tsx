'use client'

import { DataFetcher } from './results/DataFetcher'
import { RootState } from '@/store/store'
import { Tabs } from './results/Tabs'
import { useSelector } from 'react-redux'

export const ResultsPanel = () => {
  const { postId } = useSelector((state: RootState) => state.post)

  if (!postId) {
    return <></>
  }

  return (
    <div>
      <DataFetcher />

      <div className="space-y-8">
        <h1 className="text-xl font-bold">Post Analysis {postId}</h1>

        <Tabs />
      </div>
    </div>
  )
}
