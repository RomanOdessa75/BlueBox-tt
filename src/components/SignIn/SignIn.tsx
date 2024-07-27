import { FormEvent, useRef, useState } from 'react'
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
// import { useAuth } from '../../hooks/useAuth'
import { useLoginMutation } from '../../app/api/apiSlice'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { setToken } from '../../store/slice/authSlice'
import ErrorModal from '../ErrorModal/ErrorModal'

const SignIn = () => {
  // const { login } = useAuth()
  // const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const dispatch = useAppDispatch()
  const [loginMutation] = useLoginMutation()

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!emailRef.current?.value || !passwordRef.current?.value) return

    try {
      // setError('')
      setLoading(true)
      const { token } = await loginMutation({
        email: emailRef.current!.value,
        password: passwordRef.current!.value
      }).unwrap()
      dispatch(setToken(token))
      navigate(location.state?.path || '/', { replace: true })
    } catch (err: any) {
      console.log(err)
      // setError(err.data?.message || 'Failed to login')
      setShowModal(true)
    } finally {
      setLoading(false)
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
        {/* {error && !showModal && <Alert variant="danger">{error}</Alert>} */}
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="email" required placeholder="Email" ref={emailRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Control type="password" required placeholder="Password" ref={passwordRef} />
          </Form.Group>

          <Button className="w-50 submit-signup" variant="primary" type="submit" disabled={loading}>
            {loading ? (
              <Spinner animation="border" size="sm" as={'span'} role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <span>Sign In</span>
            )}
          </Button>
        </Form>
      </div>

      <ErrorModal show={showModal} onHide={() => setShowModal(false)} />
    </>
  )
}

export default SignIn

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
