// src/pages/HomePage/HomePage.tsx
import React, { useEffect, useState } from 'react'
import Home from '../../components/Home/Home'
import SignIn from '../../components/SignIn/SignIn'
import api from '../../utils/api'

const HomePage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false)

  // const baseUrl = 'https://devzone.blueboxonline.co.uk/api/v1' || ''
  const baseUrl = import.meta.env.VITE_API_BASE_URL || ''

  useEffect(() => {
    // const checkSession = async () => {
    //   try {
    //     await api.get(`${baseUrl}/users/session`)
    //     setIsLogin(true)
    //   } catch (error) {
    //     setIsLogin(false)
    //   }
    // }
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

  return <>{isLogin ? <Home /> : <SignIn />}</>
}

export default HomePage

// import React from 'react'
// import Home from '../../components/Home/Home'
// import SignIn from '../../components/SignIn/SignIn'

// const HomePage: React.FC = () => {
//   const isLogin: boolean = !!localStorage.getItem('token')

//   return <>{isLogin ? <Home /> : <SignIn />}</>
// }

// export default HomePage
