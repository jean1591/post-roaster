'use client'

import { PiLinkedinLogo, PiTwitterLogo } from 'react-icons/pi'
import { Platform, setPlatform } from '@/store/features/createPost/slice'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store/store'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'

export const SelectPlatformStep = () => {
  return (
    <div className="space-y-4">
      <p className="font-bold leading-none tracking-tight">
        Where would you like to share this post ?
      </p>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <PlatformButton label={Platform.Linkedin} icon={PiLinkedinLogo} />
        <PlatformButton label={Platform.Twitter} icon={PiTwitterLogo} />
      </div>
    </div>
  )
}

const PlatformButton = ({
  label,
  icon: Icon,
}: {
  label: Platform
  icon: React.ElementType
}) => {
  const dispatch = useDispatch()
  const { platform } = useSelector((state: RootState) => state.createPost)

  return (
    <button
      onClick={() => dispatch(setPlatform(label))}
      className={classNames(
        buttonHoverTransition,
        platform === label ? 'bg-black text-white' : '',
        'group flex items-center justify-start gap-2 rounded-md border-[1px] border-slate-200 p-2 hover:bg-black hover:text-white'
      )}
    >
      <div
        className={classNames(
          buttonHoverTransition,
          platform === label ? 'bg-white text-black' : 'bg-black text-white',
          'rounded-full p-1 group-hover:bg-white group-hover:text-black'
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <p className="font-bold">{label}</p>
    </button>
  )
}
