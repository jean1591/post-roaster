'use client'

import { PiFolderPlusLight, PiPlusBold } from 'react-icons/pi'
import { PiLinkedinLogo, PiTwitterLogo } from 'react-icons/pi'

import Link from 'next/link'
import { Platform as PlatformEnum } from '@/store/features/createPost/slice'
import { RootState } from '@/store/store'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'
import { convertToPlainText } from '@/utils/textFormatter'
import { useSelector } from 'react-redux'

export const Posts = () => {
  const { posts } = useSelector((state: RootState) => state.dashboard)

  // TODO: add skeleton
  if (!posts) {
    return <></>
  }

  if (posts.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 xl:grid-cols-4">
      {posts.map((post) => {
        return (
          <Link
            href={`/posts/${post.id}`}
            key={post.id}
            className={classNames(
              buttonHoverTransition,
              'group space-y-4 rounded-md border-[1px] border-black p-4 hover:cursor-pointer hover:bg-black hover:text-white'
            )}
          >
            <div className="flex items-center justify-between">
              <Platform platform={post.platform as PlatformEnum} />
              <p>{new Date(post.createdAt).toISOString().slice(0, 10)}</p>
              <div className="flex items-center justify-end gap-1">
                <p className="text-xl font-bold">{post.notation.toFixed(2)}</p>
                <p>/ 10</p>
              </div>
            </div>

            <p className="leading-none tracking-tight group-hover:text-white lg:col-span-2">
              {convertToPlainText(post.content.slice(0, 60))}...
            </p>
          </Link>
        )
      })}
    </div>
  )
}

const Platform = ({ platform }: { platform: PlatformEnum }) => {
  const Icon =
    platform === PlatformEnum.Linkedin ? PiLinkedinLogo : PiTwitterLogo

  return (
    <div className="rounded-full bg-black p-2 text-white group-hover:bg-white group-hover:text-black">
      <Icon className="h-6 w-6" />
    </div>
  )
}

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <PiFolderPlusLight className="h-12 w-12" />

      <p className="text-sm tracking-tight text-slate-600">
        Get started by creating a new post.
      </p>

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
