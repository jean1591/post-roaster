'use client'

import { Tab as TabEnum, setTab } from '@/store/features/post/slice'

import { useDispatch } from 'react-redux'

export const TabButton = ({ label }: { label: TabEnum }) => {
  const dispatch = useDispatch()

  return (
    <button
      onClick={() => dispatch(setTab(label))}
      className="rounded-md border-[1px] border-black bg-black px-2 py-1 font-bold tracking-tight text-white hover:bg-slate-700"
    >
      {label}
    </button>
  )
}
