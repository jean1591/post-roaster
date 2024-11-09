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

      <div className="items-center-justify-end flex gap-2">
        <p>Made by</p>
        <Link
          className="font-bold underline"
          href="https://www.jeanrobertou.com"
        >
          Jean Robertou
        </Link>
      </div>
    </div>
  )
}
