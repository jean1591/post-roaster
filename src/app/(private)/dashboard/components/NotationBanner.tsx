import { AverageNotationCard } from './AverageNotationCard'

export const NotationBanner = () => {
  return (
    <div className="space-y-8">
      <h2 className="tracking-tigh text-xl font-bold leading-none">
        All Posts Average
      </h2>

      <AverageNotationCard />
    </div>
  )
}
