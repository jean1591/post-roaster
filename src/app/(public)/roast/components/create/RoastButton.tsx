'use client'

import { Tab, setPostId, setTab } from '@/store/features/post/slice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { PiArrowsClockwiseBold } from 'react-icons/pi'
import { RootState } from '@/store/store'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'
import { resetCreatePost } from '@/store/features/createPost/slice'

export const RoastButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const dispatch = useDispatch()
  const { objective, persona, platform, postContent } = useSelector(
    (state: RootState) => state.createPost
  )

  useEffect(() => {
    if (objective && persona && platform && postContent) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [objective, persona, platform, postContent])

  const handleValidatePost = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ objective, persona, platform, postContent }),
      })

      const newPost = await response.json()

      setIsLoading(false)
      dispatch(resetCreatePost())
      dispatch(setTab(Tab.Summary))
      dispatch(setPostId(newPost.id))
    } catch (error) {
      console.error('Failed to save post', error)
      setIsLoading(false)
    }
  }

  return (
    <button
      disabled={isDisabled}
      className={classNames(
        buttonHoverTransition,
        isDisabled
          ? 'bg-white text-black'
          : 'bg-black text-white hover:bg-white hover:text-black',
        'flex items-center justify-center gap-2 rounded-md border-[1px] border-slate-200 px-4 py-2 font-bold tracking-tight'
      )}
      onClick={handleValidatePost}
    >
      {isLoading && <PiArrowsClockwiseBold className="h-5 w-5 animate-spin" />}
      Validate post
    </button>
  )
}
