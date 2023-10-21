import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import rate from '../../images/rate.png'
import deleteicon from '../../images/delete.png'
import editicon from '../../images/editicon.png'
import { json } from 'react-router-dom'
import { useState } from 'react'
import { DeleteReviewHook } from '../../hook/review/delete-review-hook'
import { ToastContainer } from 'react-toastify'
import { EditRateHook } from '../../hook/review/edit-rate-hook'
import ReactStars from "react-rating-stars-component";

const RateItem = ({review}) => {
   
 const [isUser,handleShow,handleClose,handleDelete,showDelete] = DeleteReviewHook(review)
 const [showEdit,handleCloseEdit,handleShowEdit,handleEdit,onChangeRateText,newRateText,onChangeRateValue,newRateValue] = EditRateHook(review)

 
 const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: newRateValue,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: newValue => {
        onChangeRateValue(newValue)
    }
};
    return (
        <div>
        <Modal show={showDelete} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className='font'>Confirm Delete</Modal.Title>
            </Modal.Header>
        <Modal.Body className='font'>Are you sure to delete?</Modal.Body>
            <Modal.Footer>
                <Button className='font' variant="dark" onClick={handleClose}>NO</Button>
                <Button className='font' variant="success" onClick={handleDelete}>Yes</Button>
            </Modal.Footer>
        </Modal>


        <Modal show={showEdit} onHide={handleCloseEdit}>
            <Modal.Header closeButton>
                <Modal.Title className='font'>Confirm Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <ReactStars {...setting}/>
            <input
            onChange={onChangeRateText}
            value={newRateText }
            type='text'
            className='font w-100'
            style={{border:"none"}}
            />
            
            
            </Modal.Body>
            <Modal.Footer>
                <Button className='font' variant="dark" onClick={handleCloseEdit}>NO</Button>
                <Button className='font' variant="success" onClick={handleEdit}>Edit</Button>
            </Modal.Footer>
        </Modal>
            <Row className="mt-3">
                <Col className="d-felx ">
                    <div className="rate-name  d-inline ms-4">{review.user.name}</div>
                    <img className="ms-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2 ms-1">{review.rating}</div>
                </Col>
            </Row>
            <Row className="border-bottom m-2">
                <Col className="d-flex align-items-center justify-content-between pb-2">
                    <div className="rate-description d-inline ms-2">
                        {review.review}
                    </div>
                    {
                        isUser === true ? (
                            <div className='d-inline d-flex justify-content-end '>
                                <img src={deleteicon} onClick={handleShow} width='20px' height='20px'  alt='delete' style={{cursor: 'pointer'}} />
                                <img src={editicon} onClick={handleShowEdit} width='20px' height='20px'  alt='editicon' style={{cursor: 'pointer'}} />
                            </div>) : null
                    }
                    
                </Col>
            </Row>
            <ToastContainer/>
        </div>
    )
}

export default RateItem
