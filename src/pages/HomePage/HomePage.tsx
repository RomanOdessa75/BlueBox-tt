import React from 'react'
import Home from '../../components/Home/Home'
import SignIn from '../../components/SignIn/SignIn'

const HomePage: React.FC = () => {
  const isLogin: boolean = !!localStorage.getItem('token')

  return <>{isLogin ? <Home /> : <SignIn />}</>
}

export default HomePage
