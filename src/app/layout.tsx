import './globals.css'

import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import NextAuthProvider from './components/NextAuthProvider'
import Script from 'next/script'
import { StoreProvider } from '@/store/StoreProvider'
import { Toaster } from 'react-hot-toast'
import { classNames } from '@/utils/classNames'

const inter = Inter({ subsets: ['latin'] })

const metaDescription =
  'Increase reach and save time with AI-driven content optimization. Align posts with your audience, improve readability, and publish at peak times'
const title = 'Post Roaster - Boost engagement with tailored content'
const appUrl = 'https://post-roaster.com'

export const metadata: Metadata = {
  title: title,
  description: metaDescription,
  keywords:
    'AI content optimization, audience alignment, content engagement, social media optimization, post readability, AI-driven insights, publish timing, content strategy, post analysis, engagement boost, content improvement, social media marketing, AI tools for content, digital engagement, audience targeting',
  metadataBase: new URL(appUrl),
  openGraph: {
    title: title,
    description: metaDescription,
    url: appUrl,
    siteName: title,
    images: [
      {
        url: '/hero-profile.jpeg',
        width: 500,
        height: 500,
      },
    ],
    type: 'website',
  },
  twitter: {
    title: title,
    card: 'summary',
    description: metaDescription,
    images: [
      {
        url: `${appUrl}/hero-profile.png`,
        alt: title,
      },
    ],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL!}`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="en" className="scroll-smooth">
        <body className={classNames(inter.className, 'bg-white text-black')}>
          <NextAuthProvider>
            <Script
              defer
              src={process.env.UMAMI_URL ?? ''}
              data-website-id={process.env.UMAMI_SITE_ID ?? ''}
              strategy="afterInteractive"
            />
            <Toaster position="bottom-right" reverseOrder={true} />
            {children}
          </NextAuthProvider>
        </body>
      </html>
    </StoreProvider>
  )
}
