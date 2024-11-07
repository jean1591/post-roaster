import { LoginForm } from './components/LoginForm'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-md rounded-md border-[1px] border-black bg-white p-8">
        <h1 className="mb-6 text-center text-2xl font-bold">Login</h1>
        <LoginForm />
      </div>
    </div>
  )
}
