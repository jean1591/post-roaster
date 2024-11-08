import Image from 'next/image'
import Link from 'next/link'
import { PiCheckBold } from 'react-icons/pi'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'

export default function Home() {
  return (
    <div className="space-y-20">
      <Navbar />

      <div className="space-y-20 lg:space-y-40">
        <Hero />
        <Features />
        <HowItWorks />
        <Cta />
      </div>

      <Footer />
    </div>
  )
}

const Navbar = () => {
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
        href="/login"
      >
        Login
      </Link>
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
                href="/register"
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

const Features = () => {
  const features = [
    {
      label: '🧠 Smart content optimization',
      description: 'Suggestions to enhance your content and boost engagement.',
    },
    {
      label: '✅ Audience targeting made easy',
      description:
        'Match content with your ideal audience using data-driven insights.',
    },
    {
      label: '🎯 Performance scoring for continuous improvement',
      description: 'Track and optimize your posts with actionable metrics.',
    },
  ]

  return (
    <div className="bg-black py-12 text-white">
      <Container>
        <div className="space-y-12">
          <p className="text-center text-lg font-medium uppercase leading-tight tracking-tight">
            Features
          </p>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {features.map((feature) => (
              <Feature key={feature.label} feature={feature} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

const Feature = ({
  feature,
}: {
  feature: {
    label: string
    description: string
  }
}) => {
  return (
    <div className="space-y-4 rounded-md border-4 border-white p-8">
      <p className="text-4xl">{feature.label.split(' ')[0]}</p>

      <div className="space-y-2">
        <p className="text-lg font-medium">
          {feature.label.split(' ').slice(1).join(' ')}
        </p>
        <p className="text-slate-200">{feature.description}</p>
      </div>
    </div>
  )
}

const HowItWorks = () => {
  const steps = [
    {
      label: '1️⃣ Create content',
      description: 'Draft a new post or paste content.',
    },
    {
      label: '2️⃣ Analyze and optimize',
      description: 'No guesswork, get instant and actionable feedback.',
    },
    {
      label: '3️⃣ Target improvements',
      description:
        'Focus on what matters and use suggestions to boost objectives.',
    },
  ]

  return (
    <Container>
      <div className="space-y-12">
        <p className="text-center text-lg font-medium uppercase leading-tight tracking-tight">
          How it works ?
        </p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <HowItWorkItem key={step.label} step={step} />
          ))}
        </div>
      </div>
    </Container>
  )
}

const HowItWorkItem = ({
  step,
}: {
  step: { label: string; description: string }
}) => {
  return (
    <div className="space-y-2 rounded-md border-4 border-black p-8">
      <div className="flex items-baseline justify-start gap-2">
        <p className="text-4xl">{step.label.split(' ')[0]}</p>
        <p className="text-lg font-medium">
          {step.label.split(' ').slice(1).join(' ')}
        </p>
      </div>
      <p className="text-slate-800">{step.description}</p>
    </div>
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
          Grow your brand with better content.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Link
          className={classNames(
            buttonHoverTransition,
            'rounded-md border-[1px] border-black bg-white px-16 py-4 text-lg font-bold text-black hover:border-white hover:bg-black hover:text-white'
          )}
          href="/register"
        >
          Start free trial
        </Link>
      </div>
    </div>
  )
}

const Footer = () => {
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

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto max-w-6xl">{children}</div>
}
