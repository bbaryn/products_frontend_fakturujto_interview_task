import { configureStore } from '@reduxjs/toolkit'

import productReducer from './shape/slice';

export const store = configureStore({
  reducer: {
    productStore: productReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
