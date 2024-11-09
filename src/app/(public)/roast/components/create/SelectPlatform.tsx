'use client'

import { PiLinkedinLogo, PiTwitterLogo } from 'react-icons/pi'
import { Platform, setPlatform } from '@/store/features/createPost/slice'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store/store'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'

export const SelectPlatform = () => {
  const dispatch = useDispatch()
  const { platform } = useSelector((state: RootState) => state.createPost)

  return (
    <div className="space-y-4">
      <p className="font-bold leading-none tracking-tight">
        Where would you like to share this post ?
      </p>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-0">
        <button
          onClick={() => dispatch(setPlatform(Platform.Linkedin))}
          className={classNames(
            buttonHoverTransition,
            platform === Platform.Linkedin ? 'bg-black text-white' : '',
            'group flex items-center justify-start gap-2 rounded-s-lg border-[1px] border-slate-200 p-2 hover:bg-black hover:text-white'
          )}
        >
          <div
            className={classNames(
              buttonHoverTransition,
              platform === Platform.Linkedin
                ? 'bg-white text-black'
                : 'bg-black text-white',
              'rounded-full p-1 group-hover:bg-white group-hover:text-black'
            )}
          >
            <PiLinkedinLogo className="h-5 w-5" />
          </div>
          <p className="font-bold">{Platform.Linkedin}</p>
        </button>

        <button
          onClick={() => dispatch(setPlatform(Platform.Twitter))}
          className={classNames(
            buttonHoverTransition,
            platform === Platform.Twitter ? 'bg-black text-white' : '',
            'group flex items-center justify-start gap-2 rounded-e-lg border-[1px] border-slate-200 p-2 hover:bg-black hover:text-white'
          )}
        >
          <div
            className={classNames(
              buttonHoverTransition,
              platform === Platform.Twitter
                ? 'bg-white text-black'
                : 'bg-black text-white',
              'rounded-full p-1 group-hover:bg-white group-hover:text-black'
            )}
          >
            <PiTwitterLogo className="h-5 w-5" />
          </div>
          <p className="font-bold">{Platform.Twitter}</p>
        </button>
      </div>
    </div>
  )
}
