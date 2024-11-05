import Link from 'next/link'
import { StepIndicator } from './components/StepIndicator'
import { StepperButtons } from './components/StepperButtons'
import { Steps } from './components/Steps'
import { Summary } from './components/Summary'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'

// TODO: at "Validate Post", change page to display loader animation
export default async function CreatePostPage() {
  return (
    <div className="m-4 space-y-4 lg:m-8">
      <Header />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="col-span-1 space-y-12 rounded-md border-[1px] border-slate-200 p-4 shadow-sm lg:col-span-2">
          <StepIndicator />
          <Steps />
          <StepperButtons />
        </div>

        <div className="rounded-md border-[1px] border-slate-200 p-4 shadow-sm">
          <Summary />
        </div>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="flex items-center justify-between gap-8">
      <h2 className="tracking-tigh text-xl font-bold leading-none">
        Create a new post
      </h2>
      <Link
        className={classNames(
          buttonHoverTransition,
          'rounded-md border-[1px] border-black bg-black px-2 py-1 font-bold tracking-tight text-white hover:bg-white hover:text-black'
        )}
        href="/dashboard"
      >
        Dashboard
      </Link>
    </div>
  )
}
