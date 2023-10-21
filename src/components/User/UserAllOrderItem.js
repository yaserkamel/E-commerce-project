import React from 'react'
import { Row, Col } from 'react-bootstrap'
import UserAllOrderCard from './UserAllOrderCard'

const UserAllOrderItem = ({item}) => {

    const formatDate = (dateString)=>{
        const options = {year: 'numeric' , month: 'numeric' , day: 'numeric'};
        return new Date(dateString).toLocaleDateString(undefined, options)
    }
    return (
        <div className="user-order mt-2 p-3">
            <Row>
                <div className="py-2 order-title">Order Number: #{item.id ? item.id :  0} ..... Date: {formatDate(item.createdAt)} </div>
            </Row>
            {
                item.cartItems ? ( item.cartItems.map((cartItem,index)=>{
                    return(
                        <UserAllOrderCard  key={index} cartItem={cartItem}/>
                    )
                })) : null
            }
            
            
            <Row className="d-flex justify-content-between">
                <Col xs="6" className="">
                    <div>
                        <div className="d-inline">State Of Delivery:</div>
                        <div className="d-inline mx-2 stat">{item.isDelivered === true ? "Done " : "Not Done "} </div>
                    </div>
                    <div>
                        <div className="d-inline">State Of Payment:</div>
                        <div className="d-inline mx-2 stat">{item.isPaid === true ? "Done " : "Not Done "} </div>
                    </div>
                    <div>
                        <div className="d-inline">Payment Methode:</div>
                        <div className="d-inline mx-2 stat">{item.paymentMethodType==="cash" ? "Cash" : "CreditCard"} </div>
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div>
                        <div className="barnd-text">{item.totalOrderPrice ||0} $</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderItem
