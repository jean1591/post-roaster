import { DashboardDto } from '@/app/api/dashboard/route'
import { DataFetcher } from './components/DataFetcher'
import { Header } from './components/Header'
import { Metadata } from 'next'
import { NotationBanner } from './components/NotationBanner'
import { Posts } from './components/Posts'
import { fetchDataFromApi } from '@/utils/fetchDataFromApi'
import { metadata } from '@/app/layout'

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...metadata,
    title: 'Dashboard - Post Roaster',
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}/dashboard`,
    },
  }
}

export default async function DashboardPage() {
  const data = await fetchDataFromApi<DashboardDto>('api/dashboard')
  const { posts, notation } = data

  return (
    <div>
      <DataFetcher posts={posts} notation={notation} />

      <div className="m-4 space-y-16 lg:m-8">
        <NotationBanner />

        <div className="space-y-8">
          <Header />
          <Posts />
        </div>
      </div>
    </div>
  )
}
