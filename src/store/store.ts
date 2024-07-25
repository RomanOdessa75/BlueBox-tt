import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import filtersReducer from '../store/slice/filtersSlice'
import { api } from '../app/api/apiSlice'

const rootReducer = combineReducers({
  //   auth: authReducer
  filters: filtersReducer,
  [api.reducerPath]: api.reducer
})

const store = configureStore({
  reducer: rootReducer,

  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
})

export default store

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
