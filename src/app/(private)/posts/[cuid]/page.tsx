import { DataFetcher } from './components/DataFetcher'
import Link from 'next/link'
import { PostDto } from '@/app/api/posts/[cuid]/route'
import { Results } from './components/Results'
import { Summary } from './components/Summary'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'
import { fetchDataFromApi } from '@/utils/fetchDataFromApi'

export default async function PostPage({
  params,
}: {
  params: { cuid: string }
}) {
  const data = await fetchDataFromApi<PostDto>(`api/posts/${params.cuid}`)
  const { post } = data

  return (
    <div>
      <DataFetcher post={post} />

      <div className="m-4 space-y-4 lg:m-8">
        <Header />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="rounded-md border-[1px] border-slate-200 p-4 shadow-sm">
              <Summary />
            </div>
          </div>

          <Results />
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
          'rounded-md bg-black px-2 py-1 font-bold tracking-tight text-white hover:bg-slate-700'
        )}
        href="/dashboard"
      >
        Dashboard
      </Link>
    </div>
  )
}
