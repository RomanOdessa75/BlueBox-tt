import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { showLogin, showLoginAdmin } from '../store/slice/showLoginSlice.ts'
import { AppDispatch } from '../store/store.ts'
import { setUserData } from '../store/slice/userSlice.ts'

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>()

  return bindActionCreators(
    {
      showLogin,
      showLoginAdmin,
      setUserData
    },
    dispatch
  )
}
