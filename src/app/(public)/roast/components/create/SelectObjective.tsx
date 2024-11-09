'use client'

import {
  Objective,
  setObjective,
  setObjectiveModal,
} from '@/store/features/createPost/slice'
import { useDispatch, useSelector } from 'react-redux'

import { ModalSelector } from './ModalSelector'
import { RootState } from '@/store/store'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'

export const SelectObjective = () => {
  const dispatch = useDispatch()

  return (
    <div className="space-y-4">
      <p className="font-bold leading-none tracking-tight">
        What do you want to achieve with this post ?
      </p>

      <div className="grid grid-cols-3 gap-4 lg:grid-cols-5 lg:gap-0">
        <input
          onChange={(e) => dispatch(setObjective(e.target.value))}
          type="text"
          placeholder="Objective to focus..."
          className="col-span-2 rounded-s-md border-[1px] border-slate-200 p-2 lg:col-span-4"
          value={
            useSelector((state: RootState) => state.createPost.objective) || ''
          }
        />
        <button
          onClick={() => dispatch(setObjectiveModal(true))}
          className={classNames(
            buttonHoverTransition,
            'col-span-1 gap-2 rounded-e-md border-[1px] border-slate-200 p-2 font-bold hover:bg-black hover:text-white'
          )}
        >
          Presets
        </button>
      </div>

      <ModalSelector modalType="objective">
        <ObjectiveModal />
      </ModalSelector>
    </div>
  )
}

const ObjectiveModal = () => {
  const dispatch = useDispatch()

  const handleObjectiveClick = (objective: Objective) => {
    dispatch(setObjective(objective))
    dispatch(setObjectiveModal(false))
  }

  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <p className="text-center text-lg font-bold">Objective Selector</p>
        <p className="text-center text-slate-500">
          Choose an objective to focus
        </p>
      </div>

      <div className="space-y-1">
        {Object.values(Objective).map((objective) => (
          <div key={objective}>
            <button
              className={classNames(
                buttonHoverTransition,
                'w-full rounded-md border-[1px] border-black px-2 py-1 text-left font-medium hover:bg-black hover:text-white'
              )}
              onClick={() => handleObjectiveClick(objective)}
            >
              {objective}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
