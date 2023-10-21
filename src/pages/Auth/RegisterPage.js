import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { RegisterHook } from '../../hook/auth/register-hook'
import { ToastContainer } from 'react-toastify';

const RegisterPage = () => {
  const [name,email,phone,password,confirmPassword,loading,onChangeName,onChangeEmail
        ,onChangePhone,onChangePassword,onChangeConfirmPassword,onSubmit] = RegisterHook()
  return (
    <Container style={{ minHeight: "680px" }}>
    <Row className="py-5 d-flex justify-content-center hieght-search">
      <Col sm="12" className="d-flex flex-column ">
        <label className="mx-auto title-login">Create an Account</label>
        <input
          value={name}
          onChange={onChangeName}
          placeholder="Username..."
          type="text"
          className="user-input mt-3 text-center mx-auto"
        />
        <input
          value={email}
          onChange={onChangeEmail}
          placeholder="Email..."
          type="email"
          className="user-input my-3 text-center mx-auto"
        />
        <input
          value={phone}
          onChange={onChangePhone}
          placeholder="Phone..."
          type="phone"
          className="user-input text-center mx-auto"
        />
        <input
          value={password}
          onChange={onChangePassword}
          placeholder=" Password..."
          type="password"
          className="user-input text-center mx-auto my-3"
        />
        <input
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
          placeholder="Confirm Password..."
          type="password"
          className="user-input text-center mx-auto"
        />
        <button onClick={onSubmit} className="btn-login mx-auto mt-4">Register</button>
        <label className="mx-auto my-4">
          Do You Have an Account ? {" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span style={{ cursor: "pointer" }} className="text-danger">
              Click Here
            </span>
          </Link>
        </label>
      </Col>
    </Row>
    <ToastContainer/>
  </Container>
  )
}

export default RegisterPage