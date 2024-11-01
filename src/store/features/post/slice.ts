import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Post } from '@prisma/client'

export interface PostSlice {
  post: Post | null
}

const initialState: PostSlice = {
  post: null,
}

export const createPostSlice = createSlice({
  name: 'createPostSlice',
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<Post>) => {
      state.post = action.payload
    },
  },
})

export const { setPost } = createPostSlice.actions

export default createPostSlice.reducer
