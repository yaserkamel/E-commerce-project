import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import mobile from '../../images/mobile.png'

const AdminAllOrdersItem = ({item}) => {
    return (
        <Col sm="12">
            <Link to={`/admin/orders/${item._id} `} 
                className="cart-item-body-admin my-2 px-3 d-flex"
                style={{ textDecoration: "none" }}>
                <div className="w-100">
                    <Row className="justify-content-between">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 cat-text">Order Number #{item.id}</div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm="12" className="">
                            <div className=" py-1 cat-title">
                                Name: {item.user.name || ""}
                            </div>
                            <div className=" py-1 cat-title ">
                                Email: {item.user.email || ""}
                            </div>
                        </Col>
                    </Row>
                  

                    
            <Row className="d-flex justify-content-between">
                <Col xs="6" className="">
                    <div>
                        <div className="d-inline">State Of Delivery:</div>
                        <div className="d-inline mx-2 stat">{item.isDelivered === true ? "Done" : "Not Done"} </div>
                    </div>
                    <div>
                        <div className="d-inline">State Of Payment:</div>
                        <div className="d-inline mx-2 stat">{item.isPaid === true ? "Done" : "Not Done"} </div>
                    </div>
                    <div>
                        <div className="d-inline">Payment Methode:</div>
                        <div className="d-inline mx-2 stat">{item.paymentMethodType === "cash" ? "Cash" : "CreditCard"} </div>
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div>
                        <div className="barnd-text">{item.totalOrderPrice ||0} $</div>
                    </div>
                </Col>
            </Row>
            </div>
            </Link>


        </Col>
    )
}

export default AdminAllOrdersItem

