import { DashboardDto } from '@/app/api/dashboard/route'
import { DataFetcher } from './components/DataFetcher'
import { Header } from './components/Header'
import Link from 'next/link'
import { NotationBanner } from './components/NotationBanner'
import { Posts } from './components/Posts'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'
import { fetchDataFromApi } from '@/utils/fetchDataFromApi'

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
