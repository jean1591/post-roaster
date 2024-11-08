import { DataFetcher } from './components/DataFetcher'
import Link from 'next/link'
import { Metadata } from 'next'
import { PostDto } from '@/app/api/posts/[cuid]/route'
import { PostOverview } from './components/PostOverview'
import { Tabs } from './components/Tabs'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'
import { fetchDataFromApi } from '@/utils/fetchDataFromApi'
import { metadata } from '@/app/layout'

export async function generateMetadata({
  params,
}: {
  params: { cuid: string }
}): Promise<Metadata> {
  return {
    ...metadata,
    title: 'Post Details - Post Roaster',
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}/posts/${params.cuid}`,
    },
  }
}

export default async function PostPage({
  params,
}: {
  params: { cuid: string }
}) {
  const data = await fetchDataFromApi<PostDto>(`api/posts/${params.cuid}`)
  const { post, postAnalysis } = data

  return (
    <div>
      <DataFetcher post={post} postAnalysis={postAnalysis} />

      <div className="m-4 space-y-8 lg:m-8">
        <Header />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="rounded-md border-[1px] border-slate-200 p-4 shadow-sm">
              <PostOverview />
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <Tabs />
          </div>
        </div>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="flex items-center justify-between gap-8">
      <h2 className="tracking-tigh text-xl font-bold leading-none">
        Post Analysis
      </h2>

      <Link
        className={classNames(
          buttonHoverTransition,
          'rounded-md border-[1px] border-black bg-black px-4 py-1 font-bold tracking-tight text-white hover:bg-white hover:text-black'
        )}
        href="/dashboard"
      >
        Dashboard
      </Link>
    </div>
  )
}
