'use client'

import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })

    if (result?.error) {
      setError('Invalid email or password')
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="w-full rounded-md border px-3 py-2"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="w-full rounded-md border px-3 py-2"
      />
      <button
        type="submit"
        className={classNames(
          buttonHoverTransition,
          'w-full rounded-md border-[1px] border-black bg-black px-4 py-2 text-lg font-bold text-white hover:bg-white hover:text-black'
        )}
      >
        Login
      </button>
    </form>
  )
}
