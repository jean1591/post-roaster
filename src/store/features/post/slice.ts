import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Post, PostAnalysis } from '@/app/api/interfaces/post'

export enum Tab {
  Audience = 'Audience',
  Engagement = 'Engagement',
  Language = 'Language',
  Structure = 'Structure',
  Summary = 'Summary',
}

export interface PostSlice {
  postAnalysis: PostAnalysis | null
  post: Post | null
  tab: Tab
}

const initialState: PostSlice = {
  postAnalysis: null,
  post: null,
  tab: Tab.Summary,
}

// TODO: rename createPostSlice to postSlice
export const createPostSlice = createSlice({
  name: 'createPostSlice',
  initialState,
  reducers: {
    setPostAnalysis: (state, action: PayloadAction<PostAnalysis>) => {
      state.postAnalysis = action.payload
    },
    setPost: (state, action: PayloadAction<Post>) => {
      state.post = action.payload
    },
    setTab: (state, action: PayloadAction<Tab>) => {
      state.tab = action.payload
    },
  },
})

export const { setPostAnalysis, setPost, setTab } = createPostSlice.actions

export default createPostSlice.reducer
