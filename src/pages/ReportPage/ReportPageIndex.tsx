import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useAppSelector } from '../../hooks/useAppDispatch'
import { useNavigate } from 'react-router-dom'

export default function ReportPage() {
  const [number, setNumber] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState('')
  const [text, setText] = useState('')
  const baseUrl = import.meta.env.VITE_API_BASE_URL || ''
  const isLogin = useAppSelector((state) => state.auth.isLogin)
  const navigate = useNavigate()

  if (!isLogin) {
    navigate('/')
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setFileName(e.target.files[0].name)
    } else {
      setFile(null)
      setFileName('')
    }
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const getFileDetails = (
    file: File
  ): Promise<{ name: string; size: number; type: string; data: string }> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        resolve({
          name: file.name,
          size: file.size,
          type: file.type,
          data: reader.result?.toString().split(',')[1] || ''
        })
      }
      reader.onerror = (error) => reject(error)
      reader.readAsDataURL(file)
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData: any = {
      number_value: number,
      jpgFILE: file ? await getFileDetails(file) : null
    }

    setText(JSON.stringify(formData, null, 2)) // Display JSON in text area

    try {
      const response = await fetch(`${baseUrl}/app/report`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      })
      if (response.ok) {
        console.log('Report submitted successfully')
      } else {
        console.error('Failed to submit report')
      }
    } catch (error) {
      console.error('Error submitting report:', error)
    }
  }

  return (
    <Container fluid className="vh-100 position-relative">
      <Row className="d-none d-md-flex position-absolute top-0 mt-3 me-3">
        <Col xs="auto">
          <h1
            style={{
              fontSize: '26px',
              marginTop: '10px',
              marginRight: '15px'
            }}
          >
            Report
          </h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form
            onSubmit={handleSubmit}
            style={{ width: '280px', margin: '0 auto', marginTop: '100px' }}
          >
            <Form.Group controlId="formNumber" className="mb-3">
              <Form.Label style={{ textAlign: 'left', width: '100%' }}>
                Enter a value between 1 and 10
              </Form.Label>
              <Form.Control
                size="sm"
                type="number"
                value={number}
                onChange={handleNumberChange}
                placeholder="Value"
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="text-start" style={{ textAlign: 'left', width: '100%' }}>
                Attach a JPG image
              </Form.Label>
              <div className="d-flex align-items-center">
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="File..."
                  className="w-100 me-0"
                  value={fileName}
                  readOnly
                />
                <Button
                  size="sm"
                  variant="outline-secondary"
                  className="w-50"
                  style={{
                    borderColor: '#ced4da',
                    color: '#495057',
                    backgroundColor: 'white',
                    position: 'relative'
                  }}
                  onClick={() => document.getElementById('file-upload')?.click()}
                >
                  Browse
                </Button>
                <Form.Control
                  id="file-upload"
                  size="sm"
                  type="file"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </div>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-60">
              Generate Report
            </Button>
          </Form>
          <Form>
            <Form.Group controlId="formText" className="mb-3" style={{ marginTop: '20px' }}>
              <Form.Control
                as="textarea"
                rows={15}
                value={text}
                onChange={handleTextChange}
                style={{ width: 'calc(100vw - 100px)', marginLeft: '50px', marginRight: '50px' }}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
