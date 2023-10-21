import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import deleteicon from '../../images/delete.png'
import editicon from '../../images/editicon.png'
import CouponCardHook from '../../hook/coupon/coupon-card-hook'

const AdminCouponCard = ({coupon}) => {

  const [formatDate, dateString, show, handleShow, handleClose, handleDelete] = CouponCardHook(coupon)

  return (
    <div className="user-address-card my-3 px-2">

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
    <Row className="d-flex justify-content-between  ">
        <Col xs="6">
            <div className="p-2">Name: {coupon.name} </div>
        </Col>
        <Col xs="6" className="d-flex d-flex justify-content-end">
            <div className="d-flex p-2">
              
                <div className="d-flex mx-2">
                  <img
                      alt=""
                      className="me-1 mt-1"
                      src={editicon}
                      height="17px"
                      width="15px"
                  />
                  <Link to={`/admin/editcoupon/${coupon._id}`} style={{ textDecoration: "none" }}>
                      <p className="item-delete-edit"> Edit</p>
                  </Link>
                </div>
             
                
                <div className="d-flex ">
                    <img
                        alt=""
                        className="me-1 mt-1"
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
        <Col xs="12">
            <div
                style={{
                    color: "#555550",
                    fontFamily: "Almarai",
                    fontSize: "14px",
                }}>
                Expire Date :{formatDate(dateString)}
            </div>
        </Col>
    </Row>

    <Row className="mt-3">
        <Col xs="12" className="d-flex">
            <div
                style={{
                    color: "#555550",
                    fontFamily: "Almarai",
                    fontSize: "16px",
                }}>
                Discount
            </div>

            <div
                style={{
                    color: "#979797",
                    fontFamily: "Almarai",
                    fontSize: "16px",
                }}
                className="mx-2">
                {coupon.discount}%
            </div>
        </Col>
    </Row>
</div>
  )
}

export default AdminCouponCard
