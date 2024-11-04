'use client'

import { setPost, setPostAnalysis } from '@/store/features/post/slice'

import { Post } from '@prisma/client'
import { PostAnalysis } from '@/app/api/interfaces/post'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export const DataFetcher = ({
  postAnalysis,
  post,
}: {
  postAnalysis: PostAnalysis[]
  post: Post
}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPost(post))
    dispatch(setPostAnalysis(postAnalysis))
  }, [post, dispatch])

  return null
}
