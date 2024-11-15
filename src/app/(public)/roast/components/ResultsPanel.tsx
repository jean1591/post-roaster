'use client'

import { RootState } from '@/store/store'
import { Tabs } from './results/Tabs'
import { useSelector } from 'react-redux'

export const ResultsPanel = () => {
  const { post } = useSelector((state: RootState) => state.post)

  if (!post) {
    return <></>
  }

  return (
    <div>
      <div className="space-y-8">
        <h1 className="text-xl font-bold">Post Analysis {post.id}</h1>

        <Tabs />
      </div>
    </div>
  )
}
