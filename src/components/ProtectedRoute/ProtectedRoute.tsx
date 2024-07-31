import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppDispatch'

const ProtectedRoute = () => {
  const isLogin = useAppSelector((state) => state.auth.isLogin)
  return isLogin ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute
