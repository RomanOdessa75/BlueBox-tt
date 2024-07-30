// src/features/auth/authApiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const X_AUTH_KEY = '57230df376d73e8e1adb67a85f3fb19a'
const X_AUTH_KEY = import.meta.env.VITE_API_X_AUTH_KEY
const baseUrl = import.meta.env.VITE_API_BASE_URL

console.log('X_AUTH_KEY:', X_AUTH_KEY)
console.log('baseUrl:', baseUrl)

export const authApiSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://devzone.blueboxonline.co.uk/api/v1',
    baseUrl: baseUrl,
    credentials: 'include',
    prepareHeaders: (headers) => {
      headers.set('X-AUTH', X_AUTH_KEY)
      console.log('Headers:', headers)
      return headers
    }
  }),
  endpoints: (builder) => ({
    // login: builder.mutation({
    //   query: (credentials) => ({
    //     url: '/users/login',
    //     method: 'POST',
    //     body: credentials
    //   })
    // }),
    login: builder.mutation({
      query: (credentials) => {
        console.log('Login credentials:', credentials)
        return {
          url: '/users/login',
          method: 'POST',
          body: credentials
        }
      }
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'GET'
      })
    })
  })
})

export const { useLoginMutation, useLogoutMutation } = authApiSlice
