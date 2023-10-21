import React, { useState } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import deleteicon from '../../images/delete.png'
import editicon from '../../images/editicon.png'
import DeleteAddressHook from '../../hook/user/delete-address-hook';



const UserAddressCard = ({address}) => {
    const [show, handleClose, handleDelete, handleShow] = DeleteAddressHook(address._id)
    
    return (
        <div className="user-address-card mb-3 p-3">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='font'>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body className='font'>Are you sure to delete?</Modal.Body>
                <Modal.Footer>
                    <Button className='font' variant="dark" onClick={handleClose}>NO</Button>
                    <Button className='font' variant="success" onClick={handleDelete}>Yes</Button>
                </Modal.Footer>
            </Modal>
            <Row className="d-flex justify-content-between">
                <Col xs="6"  className="d-flex align-items-center" >
                    <div style={{color: "#555550",fontSize: "16px"}}>Name Of Address:</div>
                    <div className="mx-2 d-flex " style={{color: "#979797",fontSize: "14px",}}>
                        {address.alias}
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end align-items-center">
                    <div className="d-flex p-2 ">
                        <div className="d-flex align-items-center me-3">
                            <img
                                alt=""
                                className="me-1 "
                                src={editicon}
                                height="17px"
                                width="15px"
                            />
                            <Link to={`/user/edit-address/${address._id}`} style={{ textDecoration: "none" }}>
                                <p className="item-delete-edit"> Edit</p>
                            </Link>
                        </div>
                        <div className="d-flex align-items-center">
                            <img
                                alt=""
                                className="me-1"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p onClick={handleShow} className="item-delete-edit"> Delete</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs="12"  className="d-flex align-items-center">
                    <div style={{color: "#555550",fontSize: "16px"}}>Address Details:</div>
                    <div  className="mx-2" style={{color: "#979797",fontSize: "14px",}}>
                        {address.details}
                    </div>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col xs="12" className="d-flex align-items-center">
                    <div
                        style={{
                            color: "#555550",
                            
                            fontSize: "16px",
                        }}>
                        Phone Number:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {address.phone}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAddressCard
