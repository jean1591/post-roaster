import React from 'react'

export const HighlightedContent = ({
  content,
  suggestions,
}: {
  content: string
  suggestions: { phrase: string; issue: string; examples: string[] }[]
}) => {
  // Helper function to split text based on phrases to highlight
  const splitContentByHighlights = (
    suggestions: { phrase: string; issue: string; examples: string[] }[]
  ): {
    text: string
    isHighlighted: boolean
    suggestion?: string
    examples?: string[]
  }[] => {
    let remainingText = content
    const segments = []

    suggestions.forEach((suggestion) => {
      const { phrase, issue, examples } = suggestion
      const phraseIndex = remainingText.indexOf(phrase)

      if (phraseIndex === -1) {
        // If the phrase is not found, skip it
        console.warn(`Phrase "${phrase}" not found in content`)
        return
      }

      // Add text before the highlighted phrase as a non-highlighted segment
      if (phraseIndex > 0) {
        segments.push({
          text: remainingText.slice(0, phraseIndex),
          isHighlighted: false,
        })
      }

      // Add the highlighted phrase segment
      segments.push({
        text: phrase,
        isHighlighted: true,
        suggestion: issue,
        examples: examples,
      })

      // Update remainingText to the text after the current phrase
      remainingText = remainingText.slice(phraseIndex + phrase.length)
    })

    // Add any remaining non-highlighted text
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
