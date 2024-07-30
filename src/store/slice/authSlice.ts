import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  isLogin: boolean
  user: {
    first_name: string
    last_name: string
    email: string
  } | null
}

const initialState: UserState = {
  isLogin: false,
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin(state, action: PayloadAction<{ user: UserState['user'] }>) {
      state.isLogin = true
      state.user = action.payload.user
    },
    setLogout(state) {
      state.isLogin = false
      state.user = null
    }
  }
})

export const { setLogin, setLogout } = authSlice.actions
export default authSlice.reducer

//----------------old-------------------------

// import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interface AuthState {
//   token: string | null
// }

// const initialState: AuthState = {
//   token: null
// }

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setToken(state, action: PayloadAction<string>) {
//       state.token = action.payload
//     },
//     clearToken(state) {
//       state.token = null
//     }
//   }
// })

// export const { setToken, clearToken } = authSlice.actions
// export default authSlice.reducer
