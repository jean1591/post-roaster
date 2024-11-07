import Image from 'next/image'
import Link from 'next/link'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'

export default function Home() {
  return (
    <div className="space-y-20 lg:space-y-40">
      <Navbar />

      <div className="space-y-20 lg:mt-20 lg:space-y-40">
        <Hero />
        <Features />
        <HowItWork />
        <KeyBenefits />
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
        className="text-lg font-extrabold leading-none tracking-tight"
        href="/"
      >
        Post Roaster
      </Link>

      <Link
        className={classNames(
          buttonHoverTransition,
          'rounded-md bg-white px-4 py-1 font-bold text-black hover:bg-slate-200'
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
    <div className="grid grid-cols-1 gap-12 px-4 lg:grid-cols-2 lg:gap-4 lg:px-8">
      <div className="flex flex-col items-center justify-center space-y-8 lg:items-start lg:space-y-12">
        <p className="text-balance text-center text-5xl font-bold leading-none tracking-tighter lg:text-left">
          Create, analyze, and perfect your posts with ease
        </p>

        <p className="text-balance text-center text-2xl font-medium leading-none tracking-tighter lg:text-left">
          Boost your content’s impact by targeting the right audience, platform,
          and tone — all in one tool.
        </p>

        <Link
          className={classNames(
            buttonHoverTransition,
            'rounded-md border-[1px] border-black bg-black px-16 py-4 text-lg font-bold text-white hover:bg-white hover:text-black'
          )}
          href="/register"
        >
          Check your post !
        </Link>
      </div>

      <div className="flex items-center justify-center rounded-md border-[1px] border-black p-4">
        <Image
          src="/hero.webp"
          alt="example of a post audience analysis"
          width={800}
          height={600}
          className="object-cover"
        />
      </div>
    </div>
  )
}

const Features = () => {
  const features = [
    {
      label: '🚀 Tailored content improvements',
      description:
        'Receive real-time, AI-driven suggestions to optimize your posts for readability, tone, and platform specifics, ensuring every post resonates with your intended audience.',
    },
    {
      label: '✅ Audience alignment check',
      description:
        'Make sure your content speaks to the right people. Our analysis tool aligns your post with audience persona, platform, and objective, so your message lands effectively.',
    },
    {
      label: '🎯 Performance scoring',
      description:
        'Gain insights with our scoring system on elements like tone, length, readability, and alignment to help you consistently create high-quality posts.',
    },
  ]

  return (
    <div className="space-y-12 bg-black p-4 py-8 text-white lg:px-8 lg:py-20">
      <p className="text-center text-3xl font-bold leading-none tracking-tight">
        Features
      </p>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {features.map((feature) => (
          <Feature key={feature.label} feature={feature} />
        ))}
      </div>
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
    <div className="space-y-4 rounded-md border-[1px] border-white p-4">
      <p className="text-lg font-bold leading-none tracking-tight">
        {feature.label}
      </p>

      <p className="leading-none tracking-tight">{feature.description}</p>
    </div>
  )
}

const HowItWork = () => {
  const steps = [
    {
      label: '1️⃣ Create content',
      description:
        "Start by drafting a new post directly in the app or paste content you've already created.",
    },
    {
      label: '2️⃣ Analyze and optimize',
      description:
        "Run the content through our analyzer to receive detailed feedback on readability, tone, structure, and audience alignment. Get actionable suggestions to enhance your content's impact.",
    },
    {
      label: '3️⃣ Targeted improvements',
      description:
        "Use personalized recommendations to tweak your post's tone, style, and structure. Our system highlights any mismatches with your intended audience or platform, allowing you to fine-tune until you reach optimal alignment.",
    },
  ]

  return (
    <div className="space-y-12 px-4 lg:px-8">
      <p className="text-center text-3xl font-bold leading-none tracking-tight">
        How the product works ?
      </p>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center space-y-8 lg:items-start">
          {steps.map((step) => (
            <HowItWorkItem key={step.label} step={step} />
          ))}
        </div>

        <div className="flex items-center justify-center rounded-md border-[1px] border-black p-4">
          <Image
            src="/post-analysis.webp"
            alt="example of a post summary analysis"
            width={600}
            height={450}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

const HowItWorkItem = ({
  step,
}: {
  step: { label: string; description: string }
}) => {
  return (
    <div className="space-y-4">
      <p className="text-lg font-bold leading-none tracking-tight">
        {step.label}
      </p>
      <p className="leading-none tracking-tight">{step.description}</p>
    </div>
  )
}

const KeyBenefits = () => {
  const benefits = [
    {
      label: '📈 Increase engagement',
      description:
        'Ensure every post is crafted to capture attention and drive interaction. With targeted suggestions, you’ll create content that truly resonates.',
    },
    {
      label: '⏱️ Save time and effort',
      description:
        'Streamline the process of optimizing posts with built-in analytics and auto-generated suggestions, so you can spend more time on what matters.',
    },
    {
      label: '💪🏼 Improve content quality',
      description:
        'From grammar checks to tone adjustments, our analysis tools improve the overall quality of your posts, making them more professional and polished.',
    },
    {
      label: '🚀 Boost credibility and trust',
      description:
        'Perfectly align your messaging and structure to enhance your credibility. Our tool helps you refine your message to build trust with your audience.',
    },
  ]

  return (
    <div className="space-y-12 px-4 lg:px-8">
      <p className="text-center text-3xl font-bold leading-none tracking-tight">
        Key benefits
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Benefit benefit={benefits[0]} />
        <div className="hidden lg:block" />
        <Benefit benefit={benefits[1]} />
        <div className="hidden lg:block" />

        <div className="hidden lg:block" />

        <Benefit benefit={benefits[2]} />
        <div className="hidden lg:block" />

        <Benefit benefit={benefits[3]} />
      </div>
    </div>
  )
}

const Benefit = ({
  benefit,
}: {
  benefit: { label: string; description: string }
}) => {
  return (
    <div className="space-y-4 rounded-md border-[1px] border-black p-4">
      <p className="text-lg font-bold leading-none tracking-tight">
        {benefit.label}
      </p>

      <p className="text-wrap leading-none tracking-tight">
        {benefit.description}
      </p>
    </div>
  )
}

const Cta = () => {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 space-y-12 rounded-none bg-black p-8 text-white lg:grid-cols-2 lg:rounded-md lg:p-16">
      <div className="space-y-8">
        <p className="text-left text-3xl font-bold leading-none tracking-tight">
          Ready to create content that connects ?
        </p>

        <p className="text-balance text-left text-lg font-medium leading-none tracking-tighter lg:text-left">
          Get started today and transform your posts into powerful engagement
          tools. Elevate your content creation and see the difference it makes.
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
        className="text-lg font-extrabold leading-none tracking-tight"
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
