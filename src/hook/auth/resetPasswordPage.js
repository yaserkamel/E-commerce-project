import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import { ResetPasswordHook } from './reset-password-hook'

const ResetPasswordPage = () => {

  const [password,confirmPassword, onChangePassword, onChangeConfirmPassword, onsubmit] = ResetPasswordHook()
  
  return (
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center ">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">Enter New Password</label>
              <input
                value={password}
                onChange={onChangePassword}
                placeholder="Enter New Password..."
                type="password"
                className="user-input my-3 text-center mx-auto"
              />

             
              <input
                value={confirmPassword}
                onChange={onChangeConfirmPassword}
                placeholder="Repeat Password..."
                type="password"
                className="user-input my-3 text-center mx-auto"
              />

              <button onClick={onsubmit} className="btn-login mx-auto mt-2">Save</button>
            </Col>
            
        </Row>
        <ToastContainer/>
      </Container>
  )
}

export default ResetPasswordPage