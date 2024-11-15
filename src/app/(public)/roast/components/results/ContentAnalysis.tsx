'use client'

import { HighlightedContent } from './HighlightedContent'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const ContentAnalysis = () => {
  const { post, postAnalysis } = useSelector((state: RootState) => state.post)

  if (!post || !postAnalysis) {
    return <></>
  }

  return (
    <HighlightedContent
      content={post.content}
      suggestions={postAnalysis.textSuggestions}
    />
  )
}
