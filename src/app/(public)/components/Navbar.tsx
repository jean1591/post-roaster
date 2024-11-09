import Link from 'next/link'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-black p-4 text-white lg:px-8">
      <Link
        className="text-lg font-extrabold leading-tight tracking-tight"
        href="/"
      >
        Post Roaster
      </Link>

      <Link
        className={classNames(
          buttonHoverTransition,
          'rounded-md border-[1px] border-black bg-white px-4 py-1 font-bold text-black hover:border-white hover:bg-black hover:text-white'
        )}
        href="/roast"
      >
        Get roasted
      </Link>
    </div>
  )
}
