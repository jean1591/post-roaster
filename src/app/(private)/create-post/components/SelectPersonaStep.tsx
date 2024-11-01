'use client'

import { Persona, setPersona } from '@/store/features/createPost/slice'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store/store'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'
import { personaToIconMapper } from '@/app/mappers/persona'

export const SelectPersonaStep = () => {
  return (
    <div className="space-y-4">
      <p className="font-bold leading-none tracking-tight">
        Which audience or persona would you like to reach ?
      </p>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {Object.keys(personaToIconMapper).map((persona) => (
          <PersonaButton key={persona} label={persona as Persona} />
        ))}
      </div>
    </div>
  )
}

const PersonaButton = ({ label }: { label: Persona }) => {
  const dispatch = useDispatch()
  const { persona } = useSelector((state: RootState) => state.createPost)

  const { description, icon: Icon } = personaToIconMapper[label]

  return (
    <button
      onClick={() => dispatch(setPersona(label))}
      className={classNames(
        buttonHoverTransition,
        persona === label ? 'bg-black text-white' : '',
        'group space-y-2 rounded-md border-[1px] border-slate-200 p-2 hover:bg-black hover:text-white'
      )}
    >
      <div className="flex items-center justify-start gap-2">
        <div
          className={classNames(
            buttonHoverTransition,
            persona === label ? 'bg-white text-black' : 'bg-black text-white',
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
