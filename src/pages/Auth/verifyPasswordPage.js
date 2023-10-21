import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import VerifyPasswordHook from '../../hook/auth/verify-password-hook'

const VerifyPasswordPage = () => {

  const [onSubmit,onChangeCode, code, loading] = VerifyPasswordHook();
  
  return (
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center ">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">Enter Code</label>
              <input
                value={code}
                onChange={onChangeCode}
                placeholder="code..."
                type="text"
                className="user-input my-3 text-center mx-auto"
              />
              <button onClick={onSubmit} className="btn-login mx-auto mt-2">Verify</button>
            </Col>
            
        </Row>
        <ToastContainer/>
      </Container>
  )
}

export default VerifyPasswordPage