import { configureStore } from '@reduxjs/toolkit'
import createPostReducer from './features/createPost/slice'
import interactionsReducer from './features/interactions/slice'

export const store = configureStore({
  reducer: {
    createPost: createPostReducer,
    interactions: interactionsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
