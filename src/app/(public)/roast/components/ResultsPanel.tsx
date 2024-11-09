'use client'

import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const ResultsPanel = () => {
  const { postId } = useSelector((state: RootState) => state.post)

  return <div>ResultsPanel {postId}</div>
}
