import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import ForgetPasswordHook from '../../hook/auth/forget-password-hook'

const ForgetPasswordPage = () => {

  const [onSubmit, onChangeEmail, email, loading] = ForgetPasswordHook();
  
  return (
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center ">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">Forget Password</label>
              <input
                value={email}
                onChange={onChangeEmail}
                placeholder="email..."
                type="text"
                className="user-input my-3 text-center mx-auto"
              />
              <button onClick={onSubmit} className="btn-login mx-auto mt-2">Send Code</button>
            </Col>
            
        </Row>
        <ToastContainer/>
      </Container>
  )
}

export default ForgetPasswordPage