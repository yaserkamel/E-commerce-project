import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import ViewAddressesHook from '../../hook/user/view-addresses-hook'
import OrderPayCashHook from '../../hook/checkout/order-pay-cash-hook'
import { ToastContainer } from 'react-toastify'
import notify from '../../hook/useNotification'
import OrderPayCardHook from '../../hook/checkout/order-pay-card-hook'
import GetAllUserCartHook from '../../hook/cart/get-all-user-cart-hook'

const ChoosePayMethoud = () => {
    const [allAddresses]=ViewAddressesHook()
    const [handleChooseAddress, addressDetails, handleCreateOrderCash]=OrderPayCashHook();
    const [handleCreateOrderCard ] = OrderPayCardHook(addressDetails)
    const [type, setType] = useState()

    const [, , totalCartPrice, , totalCartPriceAfterDiscount, ] = GetAllUserCartHook();

    const changeMethode=(e)=>{
        setType(e.target.value)
    }

    const handlePay = ()=>{

        if(type === 'CARD'){
            handleCreateOrderCard()
        }else if(type === 'CASH'){
            handleCreateOrderCash()
        }else {
            notify('Please choose pay methode', 'warn')
        }
    }
    
    return (
        <div>
            <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
            <div className="user-address-card my-2 px-3">
                <Row className="d-flex justify-content-between ">
                    <Col xs="12" className="my-2">
                        <input
                        onChange={changeMethode}
                            style={{cursor: 'pointer'}}
                            name="group"
                            id="group1"
                            type="radio"
                            value="CARD"
                            className="mt-2"
                        />
                        <label style={{cursor: 'pointer'}} className="mx-2" for="group1">
                            الدفع عن طريق البطاقه الائتمانية
                        </label>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col xs="12" className="d-flex">
                        <input
                        onChange={changeMethode}
                            style={{cursor: 'pointer'}}
                            name="group"
                            id="group2"
                            type="radio"
                            value="CASH"
                            className="mt-2"
                        />
                        <label style={{cursor: 'pointer'}} className="mx-2" for="group2">
                            الدفع عند الاستلام
                        </label>
                    </Col>
                </Row>
                <Row  className="mt-2">
                    <Col xs='6' >
                        <select name="address" id="address" className="select mt-2 px-2" onChange={handleChooseAddress}>
                            <option value="0">Select Address</option>
                            {
                                allAddresses.data ? (allAddresses.data.map((item,index)=>{
                                    return  (<option key={item._id} value={item._id}>{item.alias}</option>)
                                })) : (<option key={0} value={0}>No Addresses</option>)
                            }
                            
                        </select>
                    </Col>
                </Row>

            </div>
            
            <Row>
                <Col xs="12" className="d-flex justify-content-end">
                    <div className="product-price d-inline  border">
                        {
                            totalCartPriceAfterDiscount >=1 ?
                            `(${totalCartPrice}$)... After discount (${totalCartPriceAfterDiscount}$)`:
                            `${totalCartPrice} $`
                        }
                    </div>
                    <div onClick={handlePay} className="product-cart-add px-3 pt-2 d-inline ms-2"> اتمام الشراء</div>
                </Col>
            </Row>
            <ToastContainer/>
        </div>
    )
}

export default ChoosePayMethoud
