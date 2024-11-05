import { DashboardDto } from '@/app/api/dashboard/route'
import { DataFetcher } from './components/DataFetcher'
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

const Header = () => {
  return (
    <div className="flex items-center justify-between gap-8">
      <h2 className="tracking-tigh text-xl font-bold leading-none">Posts</h2>

      <Link
        className={classNames(
          buttonHoverTransition,
          'rounded-md border-[1px] border-black bg-black px-4 py-1 font-bold tracking-tight text-white hover:bg-white hover:text-black'
        )}
        href="/create-post"
      >
        Validate a new post
      </Link>
    </div>
  )
}
