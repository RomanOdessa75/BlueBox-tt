import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Home from '../../components/Home/Home'
import SignIn from '../../components/SignIn/SignIn'
import { setLogin, setLogout } from '../../store/slice/authSlice'
import { useAppSelector } from '../../hooks/useAppDispatch'

const HomePage: React.FC = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL || ''
  const isLogin = useAppSelector((state) => state.auth.isLogin)
  const dispatch = useDispatch()
  const [tableData, setTableData] = useState<any[]>([])

  const X_AUTH_KEY = import.meta.env.VITE_API_X_AUTH_KEY

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

  useEffect(() => {
    const fetchTableData = async () => {
      if (isLogin) {
        try {
          const response = await fetch(`${baseUrl}/app/tabledata`, {
            credentials: 'include',
            headers: {
              'X-AUTH': X_AUTH_KEY
            }
          })
          if (response.ok) {
            const data = await response.json()
            setTableData(data.tableData || [])
          } else {
            console.error('Failed to fetch table data')
          }
        } catch (error) {
          console.error('Error fetching table data:', error)
        }
      }
    }
    fetchTableData()
  }, [isLogin, baseUrl])

  return <>{isLogin ? <Home tableData={tableData} /> : <SignIn />}</>
}

export default HomePage
