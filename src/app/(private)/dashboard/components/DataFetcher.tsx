'use client'

import { setNotation, setPosts } from '@/store/features/dashboard/slice'

import { Notation } from '@/app/api/interfaces/dashboard'
import { Post } from '@/app/api/interfaces/post'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export const DataFetcher = ({
  notation,
  posts,
}: {
  notation: Notation
  posts: (Post & { notation: number })[]
}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setNotation(notation))
    dispatch(setPosts(posts))
  }, [posts, dispatch])

  return null
}
