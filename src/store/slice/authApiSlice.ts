import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

export const authApiSlice = createApi({
  reducerPath: 'authApi',
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
