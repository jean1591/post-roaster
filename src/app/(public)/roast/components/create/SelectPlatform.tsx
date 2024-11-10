'use client'

import { Platform } from '@/store/features/createPost/slice'
import { PlatformButton } from './PlatformButton'

export const SelectPlatform = () => {
  return (
    <div className="space-y-4">
      <p className="font-bold leading-none tracking-tight">
        Where would you like to share this post ?
      </p>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-0">
        <PlatformButton platform={Platform.Linkedin} position="start" />
        <PlatformButton platform={Platform.Reddit} position="center" />
        <PlatformButton platform={Platform.Twitter} position="end" />
      </div>
    </div>
  )
}
