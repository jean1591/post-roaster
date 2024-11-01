'use client'

import { Post } from '@prisma/client'
import { setPost } from '@/store/features/post/slice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export const DataFetcher = ({ post }: { post: Post }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPost(post))
  }, [post, dispatch])

  return null
}
