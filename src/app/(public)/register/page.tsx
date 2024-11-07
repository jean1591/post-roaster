import { RegisterForm } from './components/RegisterForm'

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-md rounded-md border-[1px] border-black bg-white p-8">
        <h1 className="mb-6 text-center text-2xl font-bold">Register</h1>
        <RegisterForm />
      </div>
    </div>
  )
}
