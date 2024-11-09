export const Result = ({ label, value }: { label: string; value: number }) => {
  return (
    <div>
      <div className="flex items-baseline justify-start gap-2 text-xs text-slate-500">
        <div className="flex items-baseline justify-start gap-1">
          <p className="text-2xl font-extrabold text-black">{value}</p>
          <p>/10</p>
        </div>
        <p className="tracking-tight">{label}</p>
      </div>

      <div
        style={{ width: `${value * 10}%` }}
        className="h-6 rounded-sm bg-black"
      />
    </div>
  )
}
