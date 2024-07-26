import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Header/Header'

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main
        className="d-flex justify-content-center"
        style={{ backgroundColor: '#f2f5f7', height: '100vh' }}
      >
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
