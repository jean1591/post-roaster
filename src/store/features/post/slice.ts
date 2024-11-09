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
  postId: string | null
  postAnalysis: PostAnalysis | null
  post: Post | null
  tab: Tab
}

const initialState: PostSlice = {
  postId: null,
  postAnalysis: null,
  post: null,
  tab: Tab.Summary,
}

// TODO: rename createPostSlice to postSlice
export const createPostSlice = createSlice({
  name: 'createPostSlice',
  initialState,
  reducers: {
    setPostId: (state, action: PayloadAction<string>) => {
      state.postId = action.payload
    },
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

export const { setPostId, setPostAnalysis, setPost, setTab } =
  createPostSlice.actions

export default createPostSlice.reducer
