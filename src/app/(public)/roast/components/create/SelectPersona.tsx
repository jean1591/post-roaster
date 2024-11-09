'use client'

import {
  Persona,
  setPersona,
  setPersonaModal,
} from '@/store/features/createPost/slice'
import { useDispatch, useSelector } from 'react-redux'

import { ModalSelector } from './ModalSelector'
import { RootState } from '@/store/store'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'

export const SelectPersona = () => {
  const dispatch = useDispatch()

  return (
    <div className="space-y-4">
      <p className="font-bold leading-none tracking-tight">
        Which audience or persona would you like to reach ?
      </p>

      <div className="grid grid-cols-3 gap-4 lg:grid-cols-5 lg:gap-0">
        <input
          onChange={(e) => dispatch(setPersona(e.target.value))}
          type="text"
          placeholder="Audience to target..."
          className="col-span-2 rounded-s-md border-[1px] border-slate-200 p-2 lg:col-span-4"
          value={
            useSelector((state: RootState) => state.createPost.persona) || ''
          }
        />

        <button
          onClick={() => dispatch(setPersonaModal(true))}
          className={classNames(
            buttonHoverTransition,
            'col-span-1 gap-2 rounded-e-md border-[1px] border-slate-200 p-2 font-bold hover:bg-black hover:text-white'
          )}
        >
          Presets
        </button>
      </div>

      <ModalSelector modalType="persona">
        <PersonaModal />
      </ModalSelector>
    </div>
  )
}

const PersonaModal = () => {
  const dispatch = useDispatch()

  const handlePersonaClick = (persona: Persona) => {
    dispatch(setPersona(persona))
    dispatch(setPersonaModal(false))
  }

  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <p className="text-center text-lg font-bold">Persona Selector</p>
        <p className="text-center text-slate-500">Choose a persona to target</p>
      </div>

      <div className="space-y-1">
        {Object.values(Persona).map((persona) => (
          <div key={persona}>
            <button
              className={classNames(
                buttonHoverTransition,
                'w-full rounded-md border-[1px] border-black px-2 py-1 text-left font-medium hover:bg-black hover:text-white'
              )}
              onClick={() => handlePersonaClick(persona)}
            >
              {persona}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
