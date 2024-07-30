import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { RootState } from '../../store/store'

interface LoginRequest {
  username: string
  password: string
}

interface LoginResponse {
  token: string
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://devzone.blueboxonline.co.uk/api/v1/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'users/login',
        method: 'POST',
        body: credentials
      })
    })
  })
})

export const { useLoginMutation } = authApi

// import {
//   BaseQueryFn,
//   createApi,
//   FetchArgs,
//   fetchBaseQuery,
//   FetchBaseQueryError
// } from '@reduxjs/toolkit/query/react'
// import { showLogin, showLoginAdmin } from '../../store/slice/showLoginSlice.ts'

// const baseQuery = fetchBaseQuery({
//   baseUrl: 'https://localhost:5000/api/v1/',
//   prepareHeaders: (headers, { endpoint }) => {
//     const token = localStorage.getItem('token')
//     if (token && endpoint !== 'registration') {
//       headers.set('authorization', `Bearer ${token}`)
//     }
//     return headers
//   }
// })

// const baseQueryReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
//   args,
//   api,
//   extraOptions = {}
// ) => {
//   const result = await baseQuery(args, api, extraOptions)
//   const path = window.location.pathname
//   if (result.error && result.error.status === 401) {
//     if (path.startsWith('/admin')) {
//       api.dispatch(showLoginAdmin(true))
//     } else {
//       api.dispatch(showLogin(true))
//     }
//   }
//   return result
// }

// export const apiSlice = createApi({
//   reducerPath: 'apiSlice',
//   tagTypes: ['Document', 'Hero', 'User'],
//   baseQuery: baseQueryReAuth,
//   endpoints: () => ({})
// })

// // vacancies api

// interface Option {
//   id: string
//   name: string
// }

// // interface Card {
// //   id: string
// //   title: string
// //   description: string
// // }

// export const api = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
//   endpoints: (builder) => ({
//     getOptions: builder.query<Option[], string>({
//       query: (input) => `options?query=${input}`
//     })
//     // getCards: builder.query<Card[], Record<string, any>>({
//     //   query: (filters) => ({
//     //     url: 'cards',
//     //     params: filters
//     //   })
//     // })
//   })
// })

// // export const { useGetOptionsQuery, useGetCardsQuery } = api
// export const { useGetOptionsQuery } = api
