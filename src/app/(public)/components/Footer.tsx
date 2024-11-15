import { PiGithubLogo, PiLinkedinLogo, PiTwitterLogo } from 'react-icons/pi'

import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="flex items-center justify-between bg-black p-4 py-8 text-white lg:px-8">
      <Link
        className="text-lg font-extrabold leading-tight tracking-tight"
        href="/"
      >
        Post Roaster
      </Link>

      <div className="flex items-center justify-center gap-8">
        <Link target="_blank" className="underline" href="/privacy-policy">
          Privacy Policy
        </Link>
        <Link target="_blank" className="underline" href="/tos">
          Terms of Service
        </Link>
      </div>

      <div className="space-y-2">
        <div className="items-center-justify-end flex gap-2">
          <p>Made by</p>
          <Link
            className="font-bold underline"
            href="https://www.jeanrobertou.com"
          >
            Jean Robertou
          </Link>
        </div>

        <div className="flex items-center justify-end gap-2">
          <Link
            href="https://github.com/jean1591"
            target="_blank"
            className="flex items-center justify-center"
          >
            <PiGithubLogo className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/robertoujean/"
            target="_blank"
            className="flex items-center justify-center"
          >
            <PiLinkedinLogo className="h-6 w-6" />
          </Link>
          <Link
            href="https://x.com/Jean_Robert_II/"
            target="_blank"
            className="flex items-center justify-center"
          >
            <PiTwitterLogo className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}
