import React from 'react'
import Home from '../../components/Home/Home'
import SignIn from '../../components/SignIn/SignIn'
// import { Container } from 'react-bootstrap'

const HomePage: React.FC = () => {
  const isLogin: boolean = !!localStorage.getItem('token')

  return (
    <>
      {/* <div className="w-100" style={{ position: 'relative' }}> */}
      {/* <Container fluid style={{ backgroundColor: 'f2f5f7' }}> */}
      {!isLogin ? <Home /> : <SignIn />}
      {/* </Container> */}
      {/* </div> */}
    </>
  )
}

export default HomePage
