import { ContainerSingleColumn } from '../components/Container'
import { CreatePanel } from './components/CreatePanel'
import { Footer } from '../components/Footer'
import { Metadata } from 'next'
import { Navbar } from '../components/Navbar'
import { ResultsPanel } from './components/ResultsPanel'
import { metadata } from '@/app/layout'

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...metadata,
    title: 'Post Roaster - Analyse your post',
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}/roast`,
    },
  }
}

export default function Roast() {
  return (
    <div className="space-y-20">
      <Navbar />

      <ContainerSingleColumn>
        <div className="space-y-20">
          <h1 className="text-balance text-center text-5xl font-extrabold leading-tight tracking-tight">
            Analyse, Optimize, Grow
          </h1>

          <CreatePanel />
          <ResultsPanel />
        </div>
      </ContainerSingleColumn>

      <Footer />
    </div>
  )
}
