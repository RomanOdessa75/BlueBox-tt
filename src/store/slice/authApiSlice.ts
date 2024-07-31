import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
// import { setCredentials, clearCredentials } from './authSlice'
// import type { RootState } from '../store'

export const authApiSlice = createApi({
  reducerPath: 'authApi',
  // baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL || '' }),
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL || '',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: '/users/login',
        method: 'POST',
        body: { username, password },
        credentials: 'include'
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'GET',
        credentials: 'include'
      })
    })
  })
})

export const { useLoginMutation, useLogoutMutation } = authApiSlice

//-------------- prev ---------------------------
// // src/features/auth/authApiSlice.ts
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// // const X_AUTH_KEY = '57230df376d73e8e1adb67a85f3fb19a'
// const X_AUTH_KEY = import.meta.env.VITE_API_X_AUTH_KEY
// const baseUrl = import.meta.env.VITE_API_BASE_URL

// console.log('X_AUTH_KEY:', X_AUTH_KEY)
// console.log('baseUrl:', baseUrl)

// export const authApiSlice = createApi({
//   reducerPath: 'authApi',
//   baseQuery: fetchBaseQuery({
//     // baseUrl: 'https://devzone.blueboxonline.co.uk/api/v1',
//     baseUrl: baseUrl,
//     credentials: 'include',
//     prepareHeaders: (headers) => {
//       headers.set('X-AUTH', X_AUTH_KEY)
//       console.log('Headers:', headers)
//       return headers
//     }
//   }),
//   endpoints: (builder) => ({
//     // login: builder.mutation({
//     //   query: (credentials) => ({
//     //     url: '/users/login',
//     //     method: 'POST',
//     //     body: credentials
//     //   })
//     // }),
//     login: builder.mutation({
//       query: (credentials) => {
//         console.log('Login credentials:', credentials)
//         return {
//           url: '/users/login',
//           method: 'POST',
//           body: credentials
//         }
//       }
//     }),
//     logout: builder.mutation({
//       query: () => ({
//         url: '/users/logout',
//         method: 'GET'
//       })
//     })
//   })
// })

// export const { useLoginMutation, useLogoutMutation } = authApiSlice
