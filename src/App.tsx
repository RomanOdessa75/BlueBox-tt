import React from 'react'
import { Route, Routes } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap/dist/js/bootstrap.bundle.min'

import './App.scss'
import MainLayout from './components/Layout/MainLayout'
import HomePage from './pages/HomePage/HomePage'
import Page404 from './pages/Page404/Page404'
import ReportPage from './pages/ReportPage/ReportPageIndex'
// import Login from './pages/LoginPage/LiginIndex'

// import AdminLayout from './components/Layout/AdminLayout/AdminLayout.tsx'
// import ProtectedRoute from './routes/ProtectedRouteAdmin.tsx'
// import LoginAdmin from './pages/AdminPanel/LoginAdmin/LoginAdmin.tsx'

const PersonalAccount = React.lazy(() => import('./pages/PersonalAccount/PersonalAccount'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="report" element={<ReportPage />} />
        {/* <Route path="login" element={<Login />} /> */}
        <Route
          path="account/*"
          element={
            <React.Suspense fallback={<>...</>}>
              <PersonalAccount />
            </React.Suspense>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Route>
      <Route path="*" element={<Page404 />} />
      {/* <Route element={<ProtectedRoute page="admin" />}>
        <Route path="admin" element={<AdminLayout />} />
      </Route> */}
      {/* <Routes path="log-in" element={<LoginAdmin />} /> */}
    </Routes>
  )
}

export default App
