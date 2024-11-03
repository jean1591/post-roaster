'use client'

import { Tab as TabEnum, setTab } from '@/store/features/post/slice'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store/store'
import { classNames } from '@/utils/classNames'

export const TabButton = ({ label }: { label: TabEnum }) => {
  const dispatch = useDispatch()
  const { tab } = useSelector((state: RootState) => state.post)

  return (
    <button
      onClick={() => dispatch(setTab(label))}
      className={classNames(
        label === tab
          ? 'bg-white text-black hover:bg-slate-200'
          : 'bg-black text-white hover:bg-slate-700',
        'rounded-md border-[1px] border-black px-2 py-1 font-bold tracking-tight'
      )}
    >
      {label}
    </button>
  )
}
