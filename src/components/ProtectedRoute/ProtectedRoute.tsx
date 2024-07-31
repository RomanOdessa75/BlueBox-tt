import { useAppSelector } from '../../hooks/useAppDispatch'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const isLogin = useAppSelector((state) => state.auth.isLogin)
  return isLogin ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute

//--------------prev----------------------------------

// import { useEffect, useState } from 'react'
// import { Navigate, Outlet } from 'react-router-dom'

// import api from '../../utils/api'
// // import { useActions } from 'src/hooks/useActions.ts'
// // import { useGetUserQuery } from 'src/store/slice/userApiSlice.ts'

// const ProtectedRoute = () => {
//   //   const { showLoginAdmin, showLogin } = useActions()
//   //   const [isFetch, setIsFetch] = useState(false)
//   const [isLogin, setIsLogin] = useState<boolean>(false)

//   const baseUrl = import.meta.env.VITE_API_BASE_URL || ''
//   //   const { data: user } = useGetUserQuery(undefined, { skip: !isFetch })
//   //   const token = localStorage.getItem('token')
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         // const response = await api.get(`${baseUrl}/auth/check`)
//         const response = await fetch(`${baseUrl}/users/session`)
//         console.log(response)
//         // setIsLogin(response.data.isAuthenticated) // Предполагается, что сервер возвращает это поле
//         // setIsLogin(response.ok)
//         if (response.ok) {
//           setIsLogin(true)
//         }
//       } catch (error) {
//         console.error('Failed to check authentication', error)
//       }
//     }

//     checkAuth()
//   }, [])

//   return isLogin ? <Outlet /> : <Navigate to="/" />
// }

// export default ProtectedRoute

//----------------------------------------------------------
// // src/components/ProtectedRoute.tsx
// import React from 'react'
// import { Route, RouteProps, useNavigate } from 'react-router-dom'

// interface ProtectedRouteProps extends RouteProps {
//   component: React.ComponentType<any>
//   isLogin: boolean
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
//   component: Component,
//   isLogin,
//   ...rest
// }) => {
//   const navigate = useNavigate()

//   return (
//     // <Route
//     //   {...rest}
//     //   render={(props) => (isLogin ? <Component {...props} /> : <Redirect to="/" />)}
//     // />
//     <Route {...rest} path="report" element={isLogin ? <Component {...props} /> : navigate('/')} />
//   )
// }

// export default ProtectedRoute
