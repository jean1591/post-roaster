'use client'

import Link from 'next/link'
import { PiPlusBold } from 'react-icons/pi'
import { RootState } from '@/store/store'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'
import { useSelector } from 'react-redux'

export const Header = () => {
  const { posts } = useSelector((state: RootState) => state.dashboard)

  return (
    <div className="flex items-center justify-between gap-8">
      <div className="flex items-center justify-start gap-4">
        <h2 className="tracking-tigh text-xl font-bold leading-none">Posts</h2>
        <div className="flex min-h-6 min-w-6 items-center justify-center rounded-md border-[1px] border-slate-600 p-1">
          <p className="text-xs text-slate-600">{posts.length}</p>
        </div>
      </div>

      <Link
        className={classNames(
          buttonHoverTransition,
          'flex items-center justify-center gap-2 rounded-md border-[1px] border-black bg-black px-4 py-1 font-bold tracking-tight text-white hover:bg-white hover:text-black'
        )}
        href="/create-post"
      >
        <PiPlusBold className="h-4 w-4" />
        <p>New post</p>
      </Link>
    </div>
  )
}
