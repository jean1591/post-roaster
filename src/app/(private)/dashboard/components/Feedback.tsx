interface Props {
  colour: 'blue' | 'green'
  icon: string
  text: string
  title: string
}

export const Feedback = ({ colour, title, icon, text }: Props) => {
  return (
    <div className="rounded-md border-[1px] border-black p-4">
      <div className="flex items-center justify-start space-x-2">
        <h2 className={`text-xl font-extrabold text-${colour}-500`}>{title}</h2>
      </div>
    </div>
  )
}
