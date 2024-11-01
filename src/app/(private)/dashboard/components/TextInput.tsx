export const TextInput = () => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="font-bold leading-none tracking-tight">
        Paste or type in your post
      </label>

      <textarea className="rounded-md border-[1px] border-black p-4" />
    </div>
  )
}
