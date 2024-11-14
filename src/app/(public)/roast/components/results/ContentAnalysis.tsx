'use client'

import { HighlightedContent } from './HighlightedContent'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const ContentAnalysis = () => {
  const { post } = useSelector((state: RootState) => state.post)

  if (!post) {
    return <></>
  }

  const fullAnalysis = {
    suggestions: [
      {
        phrase: '€25 a month felt steep for authentication and database',
        issue: 'Consider mentioning alternative solutions',
        examples: [
          'Switching to an open-source alternative saved me monthly costs',
          'Self-hosting authentication and database can be more affordable',
        ],
      },
      {
        phrase: 'self-hosting brings extra steps',
        issue: 'Clarify the challenges of self-hosting',
        examples: [
          'Self-hosting requires setup time but provides full control',
          'More steps but offers data ownership and customization',
        ],
      },
    ],
  }

  return (
    <HighlightedContent
      content={post.content}
      suggestions={fullAnalysis.suggestions}
    />
  )
}
