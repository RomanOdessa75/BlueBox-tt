// src/pages/HomePage/HomePage.tsx
// import React, { useEffect, useState } from 'react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Home from '../../components/Home/Home'
import SignIn from '../../components/SignIn/SignIn'
import { setLogin, setLogout } from '../../store/slice/authSlice'
import { useAppSelector } from '../../hooks/useAppDispatch'

// import api from '../../utils/api'

const HomePage: React.FC = () => {
  // const [isLogin, setIsLogin] = useState(false)

  // const baseUrl = 'https://devzone.blueboxonline.co.uk/api/v1' || ''
  const baseUrl = import.meta.env.VITE_API_BASE_URL || ''

  const isLogin = useAppSelector((state) => state.auth.isLogin)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   // const checkSession = async () => {
  //   //   try {
  //   //     await api.get(`${baseUrl}/users/session`)
  //   //     setIsLogin(true)
  //   //   } catch (error) {
  //   //     setIsLogin(false)
  //   //   }
  //   // }
  //   const checkSession = async () => {
  //     try {
  //       const response = await fetch(`${baseUrl}/users/session`)
  //       if (response.ok) {
  //         setIsLogin(true)
  //       } else {
  //         setIsLogin(false)
  //       }
  //     } catch (error) {
  //       setIsLogin(false)
  //     }
  //   }

  //   checkSession()
  // }, [])
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

  return <>{isLogin ? <Home /> : <SignIn />}</>
}

export default HomePage

// function dispatch(arg0: { payload: { user: string | null }; type: 'auth/setLogin' }) {
//   throw new Error('Function not implemented.')
// }

//--------------------------------
// import React from 'react'
// import Home from '../../components/Home/Home'
// import SignIn from '../../components/SignIn/SignIn'

// const HomePage: React.FC = () => {
//   const isLogin: boolean = !!localStorage.getItem('token')

//   return <>{isLogin ? <Home /> : <SignIn />}</>
// }

// export default HomePage
