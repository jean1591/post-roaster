import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import { PiCheckBold } from 'react-icons/pi'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'

export default function Home() {
  return (
    <div className="space-y-20">
      <Navbar />

      <div className="space-y-20 lg:space-y-40">
        <Hero />
        {/* Add <Features /> */}
        <Cta />
      </div>

      <Footer />
    </div>
  )
}

const Hero = () => {
  return (
    <Container>
      <div className="space-y-16">
        <div className="space-y-12">
          <h1 className="text-balance text-center text-5xl font-extrabold leading-tight tracking-tight">
            Higher engagement with content tailored to{' '}
            <span className="underline">your audience</span>
          </h1>

          <div className="mx-auto max-w-sm">
            <h2 className="text-balance text-left text-xl font-medium leading-tight tracking-tight">
              Actionable insights for your posts:
            </h2>

            <div className="mt-4 space-y-1 text-slate-700">
              <div className="flex items-center justify-start gap-2">
                <PiCheckBold className="text-black" />
                <p>Increase engagement and reach</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <PiCheckBold className="text-black" />
                <p>Save time and effort</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <PiCheckBold className="text-black" />
                <p>Improve content quality</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <PiCheckBold className="text-black" />
                <p>Boost credibility and trust</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center space-y-12 lg:items-start">
              <Link
                className={classNames(
                  buttonHoverTransition,
                  'rounded-md border-[1px] border-black bg-black px-12 py-2 text-base font-medium text-white hover:bg-white hover:text-black'
                )}
                href="/roast"
              >
                Stop posting in the dark
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center rounded-md border-4 border-black p-4">
          <Image
            src="/post-analysis.webp"
            alt="example of a post audience analysis"
            width={1000}
            height={1000}
            fetchPriority="high"
            className="object-cover"
          />
        </div>
      </div>
    </Container>
  )
}

const Cta = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-8 rounded-md bg-black p-8 text-white lg:p-16">
      <div className="space-y-8">
        <p className="text-center text-3xl font-extrabold leading-tight tracking-tight">
          Ready to create content that drives results ?
        </p>

        <p className="text-balance text-center text-xl font-medium leading-tight tracking-tight">
          Grow with better content.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Link
          className={classNames(
            buttonHoverTransition,
            'rounded-md border-[1px] border-black bg-white px-16 py-4 text-lg font-bold text-black hover:border-white hover:bg-black hover:text-white'
          )}
          href="/roast"
        >
          Boost your engagement
        </Link>
      </div>
    </div>
  )
}
