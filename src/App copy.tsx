// import React from 'react'
import { Routes } from 'react-router'
// import ReactDOM from 'react-dom/client'
import { Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainLayout from './components/Layout/Main'

function App() {
  return (
    <Routes>
      {/* <Route path="/main" render={(props) => <MainLayout {...props} />} />
      <Redirect from="/" to="/main/dashboard" /> */}
      <Route path="/main" element={<MainLayout />} />
      <Route path="/" element={<Navigate to="/main/dashboard" />} />
    </Routes>
  )
}

export default App

// import React from 'react'
// import { Route, Routes } from 'react-router'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import './App.scss'
// import MainLayout from './components/Layout/MainLayout'
// import HomePage from './pages/HomePage/HomePage'
// import Page404 from './pages/Page404/Page404'
// import ReportPage from './pages/ReportPage/ReportPageIndex'
// import SignIn from './components/SignIn/SignIn'
// import Home from './components/Home/Home'
// // import Login from './pages/LoginPage/LiginIndex'

// // import AdminLayout from './components/Layout/AdminLayout/AdminLayout.tsx'
// // import ProtectedRoute from './routes/ProtectedRouteAdmin.tsx'
// // import LoginAdmin from './pages/AdminPanel/LoginAdmin/LoginAdmin.tsx'

// const PersonalAccount = React.lazy(() => import('./pages/PersonalAccount/PersonalAccount'))

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<MainLayout />}>
//         <Route path="/" element={<HomePage />}>
//           <Route path="signin" element={<SignIn />} />
//           <Route path="home" element={<Home />} />
//         </Route>

//         <Route path="report" element={<ReportPage />} />
//         {/* <Route path="login" element={<Login />} /> */}
//         <Route
//           path="account/*"
//           element={
//             <React.Suspense fallback={<>...</>}>
//               <PersonalAccount />
//             </React.Suspense>
//           }
//         />
//         <Route path="*" element={<Page404 />} />
//       </Route>
//       <Route path="*" element={<Page404 />} />
//       {/* <Route element={<ProtectedRoute page="admin" />}>
//         <Route path="admin" element={<AdminLayout />} />
//       </Route> */}
//       {/* <Routes path="log-in" element={<LoginAdmin />} /> */}
//     </Routes>
//   )
// }

// export default App
