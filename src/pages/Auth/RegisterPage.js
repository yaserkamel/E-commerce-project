import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { RegisterHook } from '../../hook/auth/register-hook'
import { ToastContainer } from 'react-toastify';

const RegisterPage = () => {
  const [name,email,phone,password,confirmPassword,loading,onChangeName,onChangeEmail
        ,onChangePhone,onChangePassword,onChangeConfirmPassword,onSubmit] = RegisterHook()
  return (
    <div className='sign-up'>
      <Container className='signup-container'>
        <Row className="">
          <Col sm="12" className="signup-fields">
            <h3 className="title-login">Sign Up</h3>
            <input
              value={name}
              onChange={onChangeName}
              placeholder="Your Name"
              type="text"
              className=""
            />
            <input
              value={email}
              onChange={onChangeEmail}
              placeholder="Email Address"
              type="email"
              className=""
            />
            <input
              value={phone}
              onChange={onChangePhone}
              placeholder="Phone"
              type="phone"
              className=""
            />
            <input
              value={password}
              onChange={onChangePassword}
              placeholder=" Password"
              type="password"
              className=""
            />
            <input
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
              placeholder="Confirm Password"
              type="password"
              className=""
            />
            <button onClick={onSubmit} className="">Continue</button>
            <label className="">
              Already have an account ? {" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span className="">
                  Login Here
                </span>
              </Link>
            </label>
          </Col>
        </Row>
      <ToastContainer/>
    </Container>
  </div>
  )
}

export default RegisterPage