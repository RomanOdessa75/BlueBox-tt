import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  token: any
  isLogin: boolean
  user: string | null
}

const initialState: UserState = {
  isLogin: false,
  user: null,
  token: null
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
