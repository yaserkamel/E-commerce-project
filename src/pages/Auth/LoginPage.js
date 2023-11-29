import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginHook from '../../hook/auth/login-hook'
import { ToastContainer } from 'react-toastify'

const LoginPage = () => {

  const [email, password, loading, onChangeEmail, onChangePassword,onSubmit,isPress] = LoginHook();
  
  return (
    <div className="sign-up">
      <Container className='signup-container'>
        <Row className="">
          <Col sm="12" className="signup-fields">
            <h3 className="title-login">Login</h3>
              <input
                value={email}
                onChange={onChangeEmail}
                placeholder="Email Address"
                type="text"
                className=""
              />
              <input
                value={password}
                onChange={onChangePassword}
                placeholder="Password"
                type="password"
                className=""
              />
              <button onClick={onSubmit} className="">Login</button>
              <label className="">
                Don't have an account ? {" "}
                <Link to="/register" style={{textDecoration:'none'}}>
                  <span>
                    Click Here
                  </span>
                </Link>
                <Link to="/user/forget-password" style={{textDecoration:'none'}}>
                  <span className='d-block'>
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
    </div>
  )
}

export default LoginPage