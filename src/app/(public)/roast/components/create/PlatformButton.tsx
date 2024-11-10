'use client'

import { PiLinkedinLogo, PiRedditLogo, PiTwitterLogo } from 'react-icons/pi'
import { Platform, setPlatform } from '@/store/features/createPost/slice'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store/store'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'

const platformToIconMapper = {
  [Platform.Linkedin]: PiLinkedinLogo,
  [Platform.Reddit]: PiRedditLogo,
  [Platform.Twitter]: PiTwitterLogo,
}

export const PlatformButton = ({
  platform,
  position,
}: {
  platform: Platform
  position: 'start' | 'center' | 'end'
}) => {
  const dispatch = useDispatch()
  const { platform: selectedPlatform } = useSelector(
    (state: RootState) => state.createPost
  )

  const Icon = platformToIconMapper[platform]

  return (
    <button
      onClick={() => dispatch(setPlatform(platform))}
      className={classNames(
        buttonHoverTransition,
        position === 'start' ? 'rounded-s-lg' : '',
        position === 'end' ? 'rounded-e-lg' : '',
        selectedPlatform === platform ? 'bg-black text-white' : '',
        'group flex items-center justify-start gap-2 border-[1px] border-slate-200 p-2 hover:bg-black hover:text-white'
      )}
    >
      <div
        className={classNames(
          buttonHoverTransition,
          selectedPlatform === platform
            ? 'bg-white text-black'
            : 'bg-black text-white',
          'rounded-full p-1 group-hover:bg-white group-hover:text-black'
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <p className="font-bold">{platform}</p>
    </button>
  )
}
