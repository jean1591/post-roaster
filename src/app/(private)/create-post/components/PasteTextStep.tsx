'use client'

import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store/store'
import { setPostContent } from '@/store/features/createPost/slice'

export const PasteTextStep = () => {
  const dispatch = useDispatch()
  const { postContent } = useSelector((state: RootState) => state.createPost)

  return (
    <div className="space-y-4">
      <p className="font-bold leading-none tracking-tight">
        Paste your post below
      </p>

      <textarea
        onChange={(e) => dispatch(setPostContent(e.target.value))}
        defaultValue={postContent}
        className="min-h-48 w-full rounded-md border-[1px] border-slate-200 p-2 text-sm"
      />
    </div>
  )
}
