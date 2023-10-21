import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginHook from '../../hook/auth/login-hook'
import { ToastContainer } from 'react-toastify'

const LoginPage = () => {

  const [email, password, loading, onChangeEmail, onChangePassword,onSubmit,isPress] = LoginHook();
  
  return (
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center ">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">Login</label>
              <input
                value={email}
                onChange={onChangeEmail}
                placeholder="email..."
                type="text"
                className="user-input my-3 text-center mx-auto"
              />
              <input
                value={password}
                onChange={onChangePassword}
                placeholder="password..."
                type="password"
                className="user-input text-center mx-auto"
              />
              <button onClick={onSubmit} className="btn-login mx-auto mt-4">Login </button>
              <label className="mx-auto my-4">
                is not have an account ? {" "}
                <Link to="/register" style={{textDecoration:'none'}}>
                  <span style={{ cursor: "pointer" }} className="text-danger">
                    Click Here
                  </span>
                </Link>
              </label>

              <label className="mx-auto my-4">
              
              <Link to="/user/forget-password" style={{textDecoration:'none'}}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  Forget password ?
                </span>
              </Link>
            </label>
              {
                isPress ? ( loading === true ? (
                  <Spinner className='m-auto' animation='border' role='status'></Spinner>
                ): null) : null 
              }

            </Col>
            
        </Row>
        <ToastContainer/>
      </Container>
  )
}

export default LoginPage