import React from 'react'
import { Row,Col } from 'react-bootstrap'
import CartItem from '../Cart/CartItem'
import UserAllOrderItem from '../User/UserAllOrderItem'
import { useParams } from 'react-router-dom'
import GetOrderDetailsHook from '../../hook/admin/get-order-details-hook'
import ChangeOrderStatusHook from '../../hook/admin/change-order-status-hook'
import { ToastContainer } from 'react-toastify'

const AdminOrderDetalis = () => {
    const {id}=useParams()
    const [orderData,cartItem]=GetOrderDetailsHook(id)
    const [formatDate,onChangePaid,changePayOrder,onChangeDeliver,ChangeDeliverOrder] =ChangeOrderStatusHook(id)

    return (
        <div>
            <div className='admin-content-text'>Date: {formatDate(orderData.createdAt)} </div>
            <UserAllOrderItem item={orderData}/>

            <Row className="justify-content-center mt-4 user-data">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text py-2">User Details</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontSize: "16px",
                        }}>
                        Name:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {orderData ? orderData.user ? orderData.user.name :"" : ""}
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontSize: "16px",
                        }}>
                        Phone:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {orderData ? orderData.user ? orderData.user.phone :"" : ""}
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontSize: "16px",
                        }}>
                        Email:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {orderData ? orderData.user ? orderData.user.email :"" : ""}
                    </div>
                </Col>
                
                <div className="d-flex mt-2 justify-content-center">
                <div>
                    <select
                        name="pay"
                        id="paid"
                        onChange={onChangePaid}
                        className="select input-form-area mt-1  text-center px-3 w-50">
                        <option value="0"> Payment</option>
                        <option value="true"> Done</option>
                        <option value="false">Not Done</option>
                    </select>
                    <button onClick={changePayOrder} className="btn-a px-3 d-inline mx-2 ">Save </button>
                </div>
                <div>
                <select
                    name="deliver"
                    id="deliver"
                    onChange={onChangeDeliver}
                    className="select input-form-area mt-1  text-center px-3 w-50">
                        <option value="0"> Delivery</option>
                        <option value="true" > Done</option>
                        <option value="false" >Not Done</option>
                </select>
                <button onClick={ChangeDeliverOrder} className="btn-a px-3 d-inline mx-2 ">Save </button>
            </div>
                </div>
            </Row>
            <ToastContainer/>
        </div>
    )
}

export default AdminOrderDetalis

