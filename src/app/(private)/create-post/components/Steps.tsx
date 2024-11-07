'use client'

import { PasteTextStep } from './PasteTextStep'
import { RootState } from '@/store/store'
import { SelectObjectiveStep } from './SelectObjectiveStep'
import { SelectPersonaStep } from './SelectPersonaStep'
import { SelectPlatformStep } from './SelectPlatformStep'
import { useSelector } from 'react-redux'

export const Steps = () => {
  const { step } = useSelector((state: RootState) => state.createPost)

  return (
    <div className="h-96 overflow-scroll">
      {step === 0 && <PasteTextStep />}
      {step === 1 && <SelectPlatformStep />}
      {step === 2 && <SelectPersonaStep />}
      {step === 3 && <SelectObjectiveStep />}
    </div>
  )
}
