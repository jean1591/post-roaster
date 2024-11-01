'use client'

import { Objective, setObjective } from '@/store/features/createPost/slice'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store/store'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'
import { objectiveToIconMapper } from '@/app/mappers/objective'

export const SelectObjectiveStep = () => {
  return (
    <div className="space-y-4">
      <p className="font-bold leading-none tracking-tight">
        What do you want to achieve with this post ?
      </p>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {Object.keys(objectiveToIconMapper).map((persona) => (
          <ObjectiveButton key={persona} label={persona as Objective} />
        ))}
      </div>
    </div>
  )
}

const ObjectiveButton = ({ label }: { label: Objective }) => {
  const dispatch = useDispatch()
  const { objective } = useSelector((state: RootState) => state.createPost)

  const { description, icon: Icon } = objectiveToIconMapper[label]

  return (
    <button
      onClick={() => dispatch(setObjective(label))}
      className={classNames(
        buttonHoverTransition,
        objective === label ? 'bg-black text-white' : '',
        'group space-y-2 rounded-md border-[1px] border-slate-200 p-2 hover:bg-black hover:text-white'
      )}
    >
      <div className="flex items-center justify-start gap-2">
        <div
          className={classNames(
            buttonHoverTransition,
            objective === label ? 'bg-white text-black' : 'bg-black text-white',
            'rounded-full p-1 group-hover:bg-white group-hover:text-black'
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <p className="font-bold">{label}</p>
      </div>

      <p className="text-left text-sm leading-none tracking-tight">
        {description}
      </p>
    </button>
  )
}
