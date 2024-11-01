import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'

export const PlatformSelector = () => {
  const platforms = ['Linkedin', 'Twitter']
  return (
    <div className="space-y-2">
      <p className="font-bold leading-none tracking-tight">
        Select your platform
      </p>

      <div className="flex flex-wrap items-center justify-start gap-4">
        {platforms.map((platform) => (
          <p
            key={platform}
            className={classNames(
              buttonHoverTransition,
              'cursor-pointer rounded-md border-[1px] border-black px-4 py-2 hover:bg-black hover:text-white'
            )}
          >
            {platform}
          </p>
        ))}
      </div>
    </div>
  )
}
