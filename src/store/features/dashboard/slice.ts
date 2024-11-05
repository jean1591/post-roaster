import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Notation } from '@/app/api/interfaces/dashboard'
import { Post } from '@/app/api/interfaces/post'

export interface DashboardSlice {
  notation: Notation | null
  posts: (Post & { notation: number })[]
}

const initialState: DashboardSlice = {
  notation: null,
  posts: [],
}

export const dashboardSlice = createSlice({
  name: 'dashboardSlice',
  initialState,
  reducers: {
    setNotation: (state, action: PayloadAction<Notation>) => {
      state.notation = action.payload
    },
    setPosts: (
      state,
      action: PayloadAction<(Post & { notation: number })[]>
    ) => {
      state.posts = action.payload
    },
  },
})

export const { setNotation, setPosts } = dashboardSlice.actions

export default dashboardSlice.reducer
