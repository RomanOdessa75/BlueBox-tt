import React from 'react'
import { Button, Modal } from 'react-bootstrap'

interface ErrorModalProps {
  show: boolean
  onHide: () => void
}

const ErrorModal: React.FC<ErrorModalProps> = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header>
        <h1>Error - Sign In Failed</h1>
      </Modal.Header>
      <Modal.Body className="text-center">
        <p>Incorrect email and/or</p>
        <p>password</p>
        <Button
          variant="outline-secondary"
          style={{ width: '65px', height: '40px', padding: '5px' }}
          onClick={onHide}
        >
          Close
        </Button>
      </Modal.Body>
    </Modal>
  )
}

export default ErrorModal
