'use client'

import { useDispatch, useSelector } from 'react-redux'

import { PiArrowsClockwiseBold } from 'react-icons/pi'
import { RootState } from '@/store/store'
import { classNames } from '@/utils/classNames'
import { setStep } from '@/store/features/createPost/slice'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const StepperButtons = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()
  const dispatch = useDispatch()
  const { objective, persona, platform, postContent, step, steps } =
    useSelector((state: RootState) => state.createPost)

  const handleNextStep = () => {
    dispatch(setStep(step + 1))
  }
  const handlePreviousStep = () => {
    dispatch(setStep(step - 1))
  }

  const handleValidatePost = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ objective, persona, platform, postContent }),
      })

      const newPost = await response.json()

      setIsLoading(false)
      router.push(`/posts/${newPost.id}`)
    } catch (error) {
      console.error('Failed to save post', error)
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-end gap-4">
      {step > 0 && (
        <StepperButton
          style="light"
          label={`Back to ${steps[step - 1]}`}
          onClick={handlePreviousStep}
        />
      )}

      {step < steps.length - 1 && (
        <StepperButton
          style="dark"
          label={`Go to ${steps[step + 1]}`}
          onClick={handleNextStep}
        />
      )}

      {step === steps.length - 1 && (
        <button
          className="flex items-center justify-center gap-2 rounded-md border-[1px] border-slate-200 bg-black px-4 py-1 font-bold tracking-tight text-white"
          onClick={handleValidatePost}
        >
          {isLoading && (
            <PiArrowsClockwiseBold className="h-5 w-5 animate-spin" />
          )}
          Validate post
        </button>
      )}
    </div>
  )
}

const StepperButton = ({
  label,
  style,
  onClick,
}: {
  label: string
  style: string
  onClick: () => void
}) => {
  return (
    <button
      className={classNames(
        style === 'light' ? 'bg-none' : 'bg-black text-white',
        'rounded-md border-[1px] border-slate-200 px-4 py-1 font-bold tracking-tight'
      )}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
