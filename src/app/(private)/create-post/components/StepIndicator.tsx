'use client'

import { RootState } from '@/store/store'
import { classNames } from '@/utils/classNames'
import { useSelector } from 'react-redux'

export const StepIndicator = () => {
  const { step: currentStep, steps } = useSelector(
    (state: RootState) => state.createPost
  )

  return (
    <div className="hidden grid-cols-4 gap-8 lg:grid">
      {steps.map((step, index) => (
        <div key={step} className="space-y-4">
          <div
            className={classNames(
              currentStep < index ? 'bg-slate-200' : '',
              currentStep === index ? 'bg-slate-400' : '',
              currentStep > index ? 'bg-black' : '',
              'h-1 w-full'
            )}
          />

          <div className="space-y-0">
            <p
              className={classNames(
                currentStep < index ? 'text-slate-200' : '',
                currentStep === index ? 'text-slate-400' : '',
                currentStep > index ? 'text-black' : '',
                'text-xs'
              )}
            >
              Step {index + 1}
            </p>
            <p className="text-sm font-bold">{step}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
