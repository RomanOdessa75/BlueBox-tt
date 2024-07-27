import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../app/api/apiSlice'
import authReducer from '../store/slice/authSlice'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// import { configureStore } from '@reduxjs/toolkit'
// import { combineReducers } from 'redux'

// import filtersReducer from '../store/slice/filtersSlice'
// import { api } from '../app/api/apiSlice'

// const rootReducer = combineReducers({
//   //   auth: authReducer
//   filters: filtersReducer,
//   [api.reducerPath]: api.reducer
// })

// const store = configureStore({
//   reducer: rootReducer,

//   //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
//   devTools: true
// })

// export default store

// export type RootState = ReturnType<typeof rootReducer>
// export type AppStore = typeof store
// export type AppDispatch = AppStore['dispatch']
