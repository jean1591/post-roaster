import { configureStore } from '@reduxjs/toolkit'
import createPostReducer from './features/createPost/slice'
import postReducer from './features/post/slice'

export const store = configureStore({
  reducer: {
    createPost: createPostReducer,
    post: postReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
