'use client'

import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'
import { setPersona } from '@/store/features/createPost/slice'
import { useDispatch } from 'react-redux'

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
        />
        <button
          className={classNames(
            buttonHoverTransition,
            'col-span-1 gap-2 rounded-e-md border-[1px] border-slate-200 p-2 font-bold hover:bg-black hover:text-white'
          )}
        >
          Presets
        </button>
      </div>
    </div>
  )
}
