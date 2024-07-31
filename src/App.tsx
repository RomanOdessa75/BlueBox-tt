import { Route, Routes } from 'react-router'
import { useEffect } from 'react'
// import { fetchBaseQuery } from '@reduxjs/toolkit/query'

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
      {/* <Route element={<ProtectedRoute />}>
        <Route path="report" element={<ReportPage />} />
      </Route> */}
    </Routes>
  )
}

export default App

//-----------------prev----------------------------
// import { Route, Routes } from 'react-router'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min'
// import './App.scss'
// import MainLayout from './components/Layout/MainLayout'
// import HomePage from './pages/HomePage/HomePage'
// import ReportPage from './pages/ReportPage/ReportPageIndex'
// import { useEffect, useState } from 'react'
// // import { useNavigate } from 'react-router-dom'
// import SignIn from './components/SignIn/SignIn'
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// function App() {
//   const [isLogin, setIsLogin] = useState(false)
//   // const navigate = useNavigate()
//   const baseUrl = import.meta.env.VITE_API_BASE_URL || ''

//   useEffect(() => {
//     const checkSession = async () => {
//       try {
//         const response = await fetch(`${baseUrl}/users/session`)
//         if (response.ok) {
//           setIsLogin(true)
//         } else {
//           setIsLogin(false)
//         }
//       } catch (error) {
//         setIsLogin(false)
//       }
//     }
//     checkSession()
//   }, [])

//   return (
//     <Routes>
//       <Route path="/" element={<MainLayout />}>
//         <Route path="/" element={isLogin ? <HomePage /> : <SignIn />} />
//       </Route>
//       <Route element={<ProtectedRoute />}>
//         <Route path="report" element={<ReportPage />} />
//       </Route>
//     </Routes>
//   )
// }

// export default App

//---------------------------------------------
// import { Route, Routes } from 'react-router'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import 'bootstrap/dist/js/bootstrap.bundle.min'

// import './App.scss'
// import MainLayout from './components/Layout/MainLayout'
// import HomePage from './pages/HomePage/HomePage'
// import ReportPage from './pages/ReportPage/ReportPageIndex'

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<MainLayout />}>
//         <Route path="/" element={<HomePage />} />
//         <Route path="report" element={<ReportPage />} />
//       </Route>
//     </Routes>
//   )
// }

// export default App
