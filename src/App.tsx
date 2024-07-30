import { Route, Routes } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.scss'
import MainLayout from './components/Layout/MainLayout'
import HomePage from './pages/HomePage/HomePage'
import ReportPage from './pages/ReportPage/ReportPageIndex'
import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import SignIn from './components/SignIn/SignIn'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  // const navigate = useNavigate()
  const baseUrl = import.meta.env.VITE_API_BASE_URL || ''

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch(`${baseUrl}/users/session`)
        if (response.ok) {
          setIsLogin(true)
        } else {
          setIsLogin(false)
        }
      } catch (error) {
        setIsLogin(false)
      }
    }
    checkSession()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={isLogin ? <HomePage /> : <SignIn />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="report" element={<ReportPage />} />
      </Route>
    </Routes>
  )
}

export default App

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
