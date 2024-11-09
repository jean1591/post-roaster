'use client'

import { Container } from '../../components/Container'
import Image from 'next/image'
import { PiCheckBold } from 'react-icons/pi'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'
import { useState } from 'react'

// TODO: feature component is not done

export default function Features() {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0)

  const features = [
    {
      label: '🧠 Smart content optimization',
      description: 'Suggestions to enhance your content',
      imageUrl: '/post-analysis.webp',
      features: [
        'Tone analysis',
        'Readability check',
        'Length optimization',
        'Grammar review',
      ],
    },
    {
      label: '✅ Audience targeting',
      description: 'Match content with your ideal audience',
      imageUrl: '/post-analysis.webp',
      features: ['Persona alignment', 'Platform insights', 'Engagement focus'],
    },
    {
      label: '🎯 Performance scoring',
      description: 'Track and optimize your posts',
      imageUrl: '/post-analysis.webp',
      features: [
        'Score tracking',
        'Real-time feedback',
        'Goal alignment',
        'Content ranking',
      ],
    },
  ]

  return (
    <div className="bg-black py-12 text-white">
      <Container>
        <div className="space-y-12">
          <p className="text-center text-lg font-medium uppercase leading-tight tracking-tight">
            Features
          </p>

          <div className="space-y-12">
            {/* Tab buttons */}
            <div className="mx-auto grid max-w-4xl grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <button
                  key={feature.label}
                  className={classNames(
                    buttonHoverTransition,
                    selectedTabIndex === index
                      ? 'border-white text-white'
                      : 'border-black text-slate-400 hover:border-slate-400',
                    'border-b-4 p-2 font-bold'
                  )}
                  onClick={() => setSelectedTabIndex(index)}
                >
                  {feature.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="space-y-8 lg:rounded-lg lg:border-4 lg:border-white">
              <Feature feature={features[selectedTabIndex]} />
            </div>
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
    imageUrl: string
    features: string[]
  }
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="col-span-3 hidden h-full lg:block">
        <Image
          src={feature.imageUrl}
          alt={feature.label}
          width={1000}
          height={1000}
          fetchPriority="high"
          className="object-cover"
        />
      </div>

      <div className="space-y-4 lg:col-span-2 lg:p-8">
        <p className="text-lg font-bold">{feature.description}</p>

        <div className="space-y-2">
          {feature.features.map((feat) => (
            <div className="flex items-center justify-start gap-2">
              <PiCheckBold className="text-white" />
              <p>{feat}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
