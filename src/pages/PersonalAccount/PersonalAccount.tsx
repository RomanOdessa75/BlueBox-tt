import React from 'react'
import { Route, Routes } from 'react-router'
import '../../App.scss'
import ProtectedRoute from '../../routes/ProtectedRouteAdmin'

const PersonalAccount: React.FC = () => (
  <Routes>
    <Route element={<ProtectedRoute />}></Route>
  </Routes>
)

export default PersonalAccount
