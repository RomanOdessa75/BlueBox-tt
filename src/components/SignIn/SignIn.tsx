import { FormEvent, useRef, useState } from 'react'
import { Alert, Button, Card, Form, Spinner } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
// import { FirebaseError } from 'firebase/app'

// interface Error extends FirebaseError {
//   message: string
//   code: string
// }

const SignIn = () => {
  // States
  const { login } = useAuth()
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)

  // Refs
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  // Handlers
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // to check if the email or password are empty or not
    if (!emailRef.current?.value || !passwordRef.current?.value) return

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current!.value, passwordRef.current!.value)

      navigate(location.state?.path || '/', { replace: true })
    } catch (err) {
      console.log(err)

      if ((err as Error)['code'] === 'auth/invalid-credential') {
        setError('Invalid Credential')
      } else {
        setError("Can't login into your account")
      }
    }
    setLoading(false)
  }
  return (
    <div
      className="w-100 "
      style={{ maxWidth: '280px', margin: '100px auto', position: 'absolute' }}
      // style={{ maxWidth: '400px' }}
    >
      {/* <Card>
        <Card.Body> */}
      {/* <h2 className="text-center mb-5 fs-3">Login</h2> */}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control type="email" required placeholder="Email" ref={emailRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          {/* <Form.Label>Password</Form.Label> */}
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
      {/* </Card.Body>
      </Card> */}
      {/* <div className="text-center mt-3 text-muted">
        Need an account <Link to={'/signup'}>Signup</Link>
      </div> */}
    </div>
  )
}

export default SignIn
