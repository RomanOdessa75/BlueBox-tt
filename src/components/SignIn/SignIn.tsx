import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import ErrorModal from '../ErrorModal/ErrorModal'
import { useLoginMutation } from '../../store/slice/authApiSlice'
import { setLogin } from '../../store/slice/authSlice'

const SignIn = () => {
  const [showModal, setShowModal] = useState(false)

  const navigate = useNavigate()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    if (emailRef.current && passwordRef.current) {
      const username = emailRef.current.value
      const password = passwordRef.current.value
      try {
        // await login({ username, password }).unwrap()
        const result = await login({ username, password }).unwrap()
        console.log('Login success:', result)
        dispatch(setLogin({ user: result.user }))
        // Обработка успешного входа
        // if (result.ok) {
        navigate('/')
        // } else {
        //   setShowModal(true)
        // }
      } catch (error) {
        console.error('Login failed:', error)
        setShowModal(true)
      }
    }
  }

  return (
    <>
      <div className="ms-3">
        <Row className="d-none d-md-flex top-0 mt-3 me-3">
          <Col xs="auto">
            <h1
              style={{
                fontSize: '26px',
                marginTop: '10px',
                marginRight: '15px'
              }}
            >
              Sign In{' '}
            </h1>
          </Col>
        </Row>
      </div>

      <div
        className="w-100"
        style={{ maxWidth: '280px', margin: '100px auto', position: 'relative' }}
      >
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Control type="email" placeholder="Email" ref={emailRef} required />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={isLoading} className="w-100">
            {isLoading ? <Spinner animation="border" size="sm" /> : 'Sign In'}
          </Button>
        </Form>

        {showModal && <ErrorModal show={showModal} onHide={() => setShowModal(false)} />}
      </div>
    </>
  )
}

export default SignIn

//---------------- prev -----------------------------------
// src/components/SignIn/SignIn.tsx
// import { useRef, useState } from 'react'
// import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'
// // import { useLocation, useNavigate } from 'react-router-dom'
// // import api from '../../utils/api'
// import ErrorModal from '../ErrorModal/ErrorModal'
// // import { useAppDispatch } from '../../hooks/useAppDispatch'
// // import { setToken } from '../../features/auth/authSlice'
// import { useLoginMutation } from '../../store/slice/authApiSlice'
// import { useNavigate } from 'react-router-dom'

// const SignIn = () => {
//   // const baseUrl = 'https://devzone.blueboxonline.co.uk/api/v1' || ''

//   // const [loading, setLoading] = useState(false)
//   const [showModal, setShowModal] = useState(false)

//   const navigate = useNavigate()
//   // const location = useLocation()

//   const emailRef = useRef<HTMLInputElement>(null)
//   const passwordRef = useRef<HTMLInputElement>(null)

//   // const dispatch = useAppDispatch()
//   // const [loginMutation] = useLoginMutation()
//   const [login, { isLoading }] = useLoginMutation()

//   // const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault()
//   //   if (!emailRef.current?.value || !passwordRef.current?.value) return

//   //   try {
//   //     setLoading(true)
//   //     const response = await api.post(`${baseUrl}/users/login`, {
//   //       username: emailRef.current.value,
//   //       password: passwordRef.current.value
//   //     })

//   //     if (response.data.success) {
//   //       dispatch(setToken(response.data.token))
//   //       await api.get(`${baseUrl}/users/session`)
//   //       navigate(location.state?.path || '/', { replace: true })
//   //     } else {
//   //       setShowModal(true)
//   //     }
//   //   } catch (err) {
//   //     console.log(err)
//   //     setShowModal(true)
//   //   } finally {
//   //     setLoading(false)
//   //   }
//   // }
//   const submitHandler = async (event: React.FormEvent) => {
//     event.preventDefault()
//     if (emailRef.current && passwordRef.current) {
//       const username = emailRef.current.value
//       const password = passwordRef.current.value
//       try {
//         // await login({ username, password }).unwrap()
//         const result = await login({ username, password }).unwrap()
//         console.log('Login success:', result)
//         // Обработка успешного входа
//         // if (result.ok) {
//         //   navigate('/')
//         // } else {
//         //   setShowModal(true)
//         // }
//       } catch (error) {
//         console.error('Login failed:', error)
//         setShowModal(true)
//       }
//     }
//   }

//   return (
//     <>
//       <div className="ms-3">
//         <Row className="d-none d-md-flex top-0 mt-3 me-3">
//           <Col xs="auto">
//             <h1
//               style={{
//                 fontSize: '26px',
//                 marginTop: '10px',
//                 marginRight: '15px'
//               }}
//             >
//               Sign In{' '}
//             </h1>
//           </Col>
//         </Row>
//       </div>

//       <div
//         className="w-100"
//         style={{ maxWidth: '280px', margin: '100px auto', position: 'relative' }}
//       >
//         <Form onSubmit={submitHandler}>
//           <Form.Group controlId="formEmail" className="mb-3">
//             <Form.Control type="email" placeholder="Email" ref={emailRef} required />
//           </Form.Group>

//           <Form.Group controlId="formPassword" className="mb-3">
//             <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
//           </Form.Group>

//           <Button variant="primary" type="submit" disabled={isLoading} className="w-100">
//             {isLoading ? <Spinner animation="border" size="sm" /> : 'Sign In'}
//           </Button>
//         </Form>

//         {showModal && <ErrorModal show={showModal} onHide={() => setShowModal(false)} />}
//       </div>
//     </>
//   )
// }

// export default SignIn

//---------------last-----------------

// import { FormEvent, useRef, useState } from 'react'
// import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'
// import { useLocation, useNavigate } from 'react-router-dom'
// // import { useAuth } from '../../hooks/useAuth'
// // import api from '../../utils/api'
// import { useLoginMutation } from '../../app/api/apiSlice'
// import { useAppDispatch } from '../../hooks/useAppDispatch'
// import { setToken } from '../../store/slice/authSlice'
// import ErrorModal from '../ErrorModal/ErrorModal'

// const SignIn = () => {
//   // const { login } = useAuth()
//   // const [error, setError] = useState<string>('')
//   const [loading, setLoading] = useState(false)
//   const [showModal, setShowModal] = useState(false)

//   const navigate = useNavigate()
//   const location = useLocation()

//   const emailRef = useRef<HTMLInputElement>(null)
//   const passwordRef = useRef<HTMLInputElement>(null)

//   const dispatch = useAppDispatch()
//   const [loginMutation] = useLoginMutation()

//   const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     if (!emailRef.current?.value || !passwordRef.current?.value) return

//     try {
//       // setError('')
//       setLoading(true)
//       const { token } = await loginMutation({
//         username: emailRef.current!.value,
//         password: passwordRef.current!.value
//       }).unwrap()
//       dispatch(setToken(token))
//       navigate(location.state?.path || '/', { replace: true })
//     } catch (err: any) {
//       console.log(err)
//       // setError(err.data?.message || 'Failed to login')
//       setShowModal(true)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <>
//       <div className="ms-3">
//         <Row className="d-none d-md-flex top-0 mt-3 me-3">
//           <Col xs="auto">
//             <h1
//               style={{
//                 fontSize: '26px',
//                 marginTop: '10px',
//                 marginRight: '15px'
//               }}
//             >
//               Sign In{' '}
//             </h1>
//           </Col>
//         </Row>
//       </div>

//       <div
//         className="w-100"
//         style={{ maxWidth: '280px', margin: '100px auto', position: 'relative' }}
//       >
//         {/* {error && !showModal && <Alert variant="danger">{error}</Alert>} */}
//         <Form onSubmit={submitHandler}>
//           <Form.Group className="mb-3" controlId="email">
//             <Form.Control type="email" required placeholder="Email" ref={emailRef} />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="password">
//             <Form.Control type="password" required placeholder="Password" ref={passwordRef} />
//           </Form.Group>

//           <Button className="w-50 submit-signup" variant="primary" type="submit" disabled={loading}>
//             {loading ? (
//               <Spinner animation="border" size="sm" as={'span'} role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </Spinner>
//             ) : (
//               <span>Sign In</span>
//             )}
//           </Button>
//         </Form>
//       </div>

//       <ErrorModal show={showModal} onHide={() => setShowModal(false)} />
//     </>
//   )
// }

// export default SignIn

//------------------------------------------------

// import { FormEvent, useRef, useState } from 'react'
// import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { useAuth } from '../../hooks/useAuth'
// import ErrorModal from '../ErrorModal/ErrorModal'

// const SignIn = () => {
//   const { login } = useAuth()
//   const [error, setError] = useState<string>('')
//   const [loading, setLoading] = useState(false)
//   const [showModal, setShowModal] = useState(false)

//   const navigate = useNavigate()
//   const location = useLocation()

//   const emailRef = useRef<HTMLInputElement>(null)
//   const passwordRef = useRef<HTMLInputElement>(null)

//   const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     if (!emailRef.current?.value || !passwordRef.current?.value) return

//     try {
//       setError('')
//       setLoading(true)
//       await login(emailRef.current!.value, passwordRef.current!.value)
//       navigate(location.state?.path || '/', { replace: true })
//     } catch (err) {
//       console.log(err)
//       setLoading(false)
//       setShowModal(true)
//     }
//     setLoading(false)
//   }

//   return (
//     <>
//       <div className="ms-3">
//         <Row className="d-none d-md-flex top-0 mt-3 me-3">
//           <Col xs="auto">
//             <h1
//               style={{
//                 fontSize: '26px',
//                 marginTop: '10px',
//                 marginRight: '15px'
//               }}
//             >
//               Sign In{' '}
//             </h1>
//           </Col>
//         </Row>
//       </div>

//       <div
//         className="w-100"
//         style={{ maxWidth: '280px', margin: '100px auto', position: 'relative' }}
//       >
//         {error && !showModal && <Alert variant="danger">{error}</Alert>}
//         <Form onSubmit={submitHandler}>
//           <Form.Group className="mb-3" controlId="email">
//             <Form.Control type="email" required placeholder="Email" ref={emailRef} />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="password">
//             <Form.Control type="password" required placeholder="Password" ref={passwordRef} />
//           </Form.Group>

//           <Button className="w-50 submit-signup" variant="primary" type="submit" disabled={loading}>
//             {loading ? (
//               <Spinner animation="border" size="sm" as={'span'} role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </Spinner>
//             ) : (
//               <span>Sign In</span>
//             )}
//           </Button>
//         </Form>
//       </div>

//       <ErrorModal show={showModal} onHide={() => setShowModal(false)} />
//     </>
//   )
// }

// export default SignIn
