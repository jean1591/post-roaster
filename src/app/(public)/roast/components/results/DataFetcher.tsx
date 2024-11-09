'use client'

import { setPost, setPostAnalysis } from '@/store/features/post/slice'

import { PostDto } from '@/app/api/posts/[cuid]/route'
import { RootState } from '@/store/store'
import { fetchDataFromApi } from '@/utils/fetchDataFromApi'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const DataFetcher = () => {
  const dispatch = useDispatch()
  const { postId } = useSelector((state: RootState) => state.post)

  useEffect(() => {
    ;(async function getPostAnalysis() {
      if (postId) {
        const data = await fetchDataFromApi<PostDto>(`api/posts/${postId}`)
        const { post, postAnalysis } = data

        dispatch(setPost(post))
        dispatch(setPostAnalysis(postAnalysis))
      }
    })()
  }, [postId, dispatch])

  return null
}
