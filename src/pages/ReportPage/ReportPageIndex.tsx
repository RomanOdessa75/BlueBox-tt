import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

export default function ReportPage() {
  const [number, setNumber] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [text, setText] = useState('')

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Обработка формы
    console.log({ number, file, text })
  }

  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100">
      <Row>
        <Col>
          <Form onSubmit={handleSubmit} style={{ width: '280px', margin: '0 auto' }}>
            <Form.Group controlId="formNumber" className="mb-3">
              <Form.Label>Number</Form.Label>
              <Form.Control type="number" value={number} onChange={handleNumberChange} />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload File</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
            <Form.Group controlId="formText" className="mb-3">
              <Form.Label>Text</Form.Label>
              <Form.Control as="textarea" rows={3} value={text} onChange={handleTextChange} />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
