import React, { useState } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import deleteicon from '../../images/delete.png'
import ProfileHook from '../../hook/user/profile-hook'
import { ToastContainer } from 'react-toastify'
const UserProfile = () => {

    const [user,show,handleClose,handleShow,handleSubmit,name,email,phone,onChangeEmail,onChangeName,
        onChangePhone,changePassword,oldPassword,newPassword,confirmNewPassword,onChangeNewPassword,
        onChangeConfirmPassword,onChangeOldPassword]=
            ProfileHook()
    return (
        <div>

        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='font'>Confirm Update</Modal.Title>
                </Modal.Header>
                <Modal.Body className='font'>
                    <input
                    value={name}
                    onChange={onChangeName}
                    type="text"
                    className="input-form font d-block mt-3 px-3"
                    placeholder="User Name"
                    />
                    <input
                    value={email}
                    onChange={onChangeEmail}
                    type="email"
                    className="input-form font d-block mt-3 px-3"
                    placeholder="User Email"
                    />
                    <input
                    value={phone}
                    onChange={onChangePhone}
                    type="phone"
                    className="input-form font d-block mt-3 px-3"
                    placeholder="User phone"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button className='font' variant="dark" onClick={handleClose}>Cancel</Button>
                    <Button className='font' variant="success" onClick={handleSubmit}>Save</Button>
                </Modal.Footer>
            </Modal>
            <div className="admin-content-text">Profile</div>
            <div className="user-address-card my-3 px-2">
                <Row className="d-flex justify-content-between pt-2">
                    <Col xs="6" className="d-flex align-items-center">
                        <div className="p-2">Name:</div>
                        <div className="p-1 item-delete-edit">{user.name} </div>
                    </Col>
                    <Col xs="6" className="d-flex justify-content-end">
                        <div onClick={handleShow} className="d-flex align-items-center mx-2">
                            <img
                                alt=""
                                className="me-1"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> Edit</p>
                        </div>
                    </Col>
                </Row>

                <Row className="">
                    <Col xs="12" className="d-flex align-items-center">
                        <div className="p-2">Phone:</div>
                        <div className="p-1 item-delete-edit">{user.phone}</div>
                    </Col>
                </Row>
                <Row className="">
                    <Col xs="12" className="d-flex align-items-center">
                        <div className="p-2">Email:</div>
                        <div className="p-1 item-delete-edit">{user.email}</div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs="10" sm="8" md="6" className="">
                        <div className="admin-content-text">Change Password</div>
                        <input
                            value={oldPassword}
                            onChange={onChangeOldPassword}
                            type="password"
                            className="input-form d-block mt-1 px-3"
                            placeholder="Enter old password  "
                        />
                        <input
                            value={newPassword}
                            onChange={onChangeNewPassword}
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="Enter new password"
                        />
                        <input
                            value={confirmNewPassword}
                            onChange={onChangeConfirmPassword}
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="Enter confirm password"
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs="10" sm="8" md="6" className="d-flex justify-content-start ">
                        <button onClick={changePassword} className="btn-save d-inline mt-2 ">Save</button>
                    </Col>
                </Row>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default UserProfile
