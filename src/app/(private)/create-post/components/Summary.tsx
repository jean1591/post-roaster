'use client'

import {
  Objective as ObjectiveEnum,
  Persona as PersonaEnum,
  Platform as PlatformEnum,
} from '@/store/features/createPost/slice'
import { PiLinkedinLogo, PiTwitterLogo } from 'react-icons/pi'

import { RootState } from '@/store/store'
import { objectiveToIconMapper } from '@/app/mappers/objective'
import { personaToIconMapper } from '@/app/mappers/persona'
import { useSelector } from 'react-redux'

export const Summary = () => {
  const { objective, persona, platform, postText } = useSelector(
    (state: RootState) => state.createPost
  )

  return (
    <div className="space-y-4">
      <p className="text-lg font-bold tracking-tight">Post Overview</p>

      {postText && (
        <p className="rounded-md border-[1px] border-slate-200 p-2 text-left text-sm leading-none tracking-tight">
          {postText.slice(0, 100)}...
        </p>
      )}
      {platform && <Platform />}
      {persona && <Persona />}
      {objective && <Objective />}
    </div>
  )
}

const Platform = () => {
  const { platform } = useSelector((state: RootState) => state.createPost)

  const Icon =
    platform === PlatformEnum.Linkedin ? PiLinkedinLogo : PiTwitterLogo

  return (
    <div>
      <div className="flex items-center justify-start gap-2 rounded-md border-[1px] border-slate-200 p-2">
        <div className="rounded-full bg-black p-1 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <p className="font-bold">{platform}</p>
      </div>
    </div>
  )
}

const Persona = () => {
  const { persona } = useSelector((state: RootState) => state.createPost)

  const { description, icon: Icon } =
    personaToIconMapper[persona as PersonaEnum]

  return (
    <div>
      <div className="space-y-2 rounded-md border-[1px] border-slate-200 p-2">
        <div className="flex items-center justify-start gap-2">
          <div className="rounded-full bg-black p-1 text-white">
            <Icon className="h-5 w-5" />
          </div>
          <p className="font-bold">{persona}</p>
        </div>

        <p className="text-left text-sm leading-none tracking-tight">
          {description}
        </p>
      </div>
    </div>
  )
}

const Objective = () => {
  const { objective } = useSelector((state: RootState) => state.createPost)

  const { description, icon: Icon } =
    objectiveToIconMapper[objective as ObjectiveEnum]

  return (
    <div>
      <div className="space-y-2 rounded-md border-[1px] border-slate-200 p-2">
        <div className="flex items-center justify-start gap-2">
          <div className="rounded-full bg-black p-1 text-white">
            <Icon className="h-5 w-5" />
          </div>
          <p className="font-bold">{objective}</p>
        </div>

        <p className="text-left text-sm leading-none tracking-tight">
          {description}
        </p>
      </div>
    </div>
  )
}
