'use client'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import {
  setObjectiveModal,
  setPersonaModal,
} from '@/store/features/createPost/slice'

import { RootState } from '@/store/store'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

interface ModalSelectorProps {
  children: React.ReactNode
  modalType: 'objective' | 'persona'
}

export const ModalSelector = ({ children, modalType }: ModalSelectorProps) => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) =>
    modalType === 'objective'
      ? state.createPost.objectiveModalOpen
      : state.createPost.personaModalOpen
  )
  const closeModal = () => {
    dispatch(
      modalType === 'objective'
        ? setObjectiveModal(false)
        : setPersonaModal(false)
    )
  }

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
