'use client'

import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const AverageNotationCard = () => {
  const { notation } = useSelector((state: RootState) => state.dashboard)

  // TODO: create skeleton
  if (!notation) {
    return <></>
  }

  return (
    <div className="grid grid-cols-2 gap-2 rounded-md bg-black p-2 lg:grid-cols-4">
      <NotationItem label="Audience" notation={notation.audience} />
      <NotationItem label="Engagement" notation={notation.engagement} />
      <NotationItem label="Language" notation={notation.language} />
      <NotationItem label="Structure" notation={notation.structure} />
    </div>
  )
}

const NotationItem = ({
  notation,
  label,
}: {
  notation: number
  label: string
}) => {
  return (
    <div className="space-y-2 rounded-md bg-white p-4 text-black">
      <div className="flex items-baseline justify-start gap-1">
        <p className="text-4xl font-extrabold">{notation}</p>
        <p className="text-xl font-medium">/ 10</p>
      </div>
      <p className="text-xl font-medium text-slate-600">{label}</p>
    </div>
  )
}
