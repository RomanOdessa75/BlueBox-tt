import { Route, Routes } from 'react-router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLogin, setLogout } from './store/slice/authSlice'
import { useAppSelector } from './hooks/useAppDispatch'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import MainLayout from './components/Layout/MainLayout'
import HomePage from './pages/HomePage/HomePage'
import ReportPage from './pages/ReportPage/ReportPageIndex'
import SignIn from './components/SignIn/SignIn'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

function App() {
  const dispatch = useDispatch()
  const isLogin = useAppSelector((state) => state.auth.isLogin)
  const baseUrl = import.meta.env.VITE_API_BASE_URL || ''

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch(`${baseUrl}/users/session`, {
          credentials: 'include'
        })
        if (response.ok) {
          const user = await response.json()
          dispatch(setLogin({ user }))
        } else {
          dispatch(setLogout())
        }
      } catch (error) {
        dispatch(setLogout())
      }
    }
    checkSession()
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={isLogin ? <HomePage /> : <SignIn />} />
        <Route element={<ProtectedRoute />}>
          <Route path="report" element={<ReportPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
