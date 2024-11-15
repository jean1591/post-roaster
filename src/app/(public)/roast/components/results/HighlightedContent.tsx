import React from 'react'

export const HighlightedContent = ({
  content,
  suggestions,
}: {
  content: string
  suggestions: { phrase: string; issue: string; examples: string[] }[]
}) => {
  const splitContentByHighlights = (
    suggestions: { phrase: string; issue: string; examples: string[] }[]
  ): {
    text: string
    isHighlighted: boolean
    suggestion?: string
    examples?: string[]
  }[] => {
    const suggestionsWithPosition = suggestions
      .map((suggestion) => ({
        ...suggestion,
        position: content
          .toLowerCase()
          .indexOf(suggestion.phrase.toLowerCase()),
      }))
      .filter((s) => s.position !== -1)
      .sort((a, b) => a.position - b.position)

    let remainingText = content
    let remainingLowerText = content.toLowerCase()
    const segments = []

    suggestionsWithPosition.forEach((suggestion) => {
      const { phrase, issue, examples } = suggestion
      const phraseIndex = remainingLowerText.indexOf(phrase.toLowerCase())

      if (phraseIndex > 0) {
        segments.push({
          text: remainingText.slice(0, phraseIndex),
          isHighlighted: false,
        })
      }

      segments.push({
        text: remainingText.slice(phraseIndex, phraseIndex + phrase.length),
        isHighlighted: true,
        suggestion: issue,
        examples: examples,
      })

      remainingText = remainingText.slice(phraseIndex + phrase.length)
      remainingLowerText = remainingLowerText.slice(phraseIndex + phrase.length)
    })

    if (remainingText) {
      segments.push({
        text: remainingText,
        isHighlighted: false,
      })
    }

    return segments
  }

  const segments = splitContentByHighlights(suggestions)

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {/* Left side: original content with highlights */}
      <div className="whitespace-pre-wrap">
        {segments.map((segment, index) =>
          segment.isHighlighted ? (
            <span
              key={index}
              className="whitespace-pre-wrap bg-yellow-200 font-semibold"
              title={segment.suggestion}
            >
              {segment.text}
            </span>
          ) : (
            <span key={index} className="whitespace-pre-wrap">
              {segment.text}
            </span>
          )
        )}
      </div>

      {/* Right side: suggestions */}
      <div className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-2">
            <p className="font-bold">{suggestion.issue}</p>
            <ul className="list-inside list-disc text-gray-700">
              {suggestion.examples.map((example, exIndex) => (
                <li key={exIndex}>{example}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
