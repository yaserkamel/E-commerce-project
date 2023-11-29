import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import DeleteCartHook from '../../hook/cart/delete-cart-hook'
import { ToastContainer } from 'react-toastify'
import ApplyCouponHook from '../../hook/cart/apply-coupon-hook'
import notify from '../../hook/useNotification'

const CartCheckout = ({cartItems,totalCartPrice, totalCartPriceAfterDiscount,couponNameRes }) => {

    
    const [loading, handleDeleteCart] = DeleteCartHook();
    const [couponName, onChangeCouponName, handleSubmitCoupon, handleCheckOut] = ApplyCouponHook(cartItems);

    useEffect(()=>{
        if(couponNameRes){
            onChangeCouponName(couponNameRes)
        }
    },[couponNameRes])

    
    return (
        <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
            <Col xs="12" className="d-flex  flex-column ">
                <div className="d-flex  ">
                    <input
                        value={couponName}
                        onChange={(e)=>onChangeCouponName(e.target.value)}
                        className="copon-input d-inline text-center "
                        placeholder="Coupon Name"
                    />
                    <button onClick={handleSubmitCoupon} className="copon-btn d-inline ">Apply</button>
                </div>
                <div className="product-price d-inline w-100 my-3  border">
                    {
                        totalCartPriceAfterDiscount >=1 ?
                        (<div>
                            <span style={{textDecoration:'line-through',marginRight: '10px',color: '#818181'}}>{totalCartPrice}$</span>
                            {totalCartPriceAfterDiscount}$
                        </div>): 
                        `${totalCartPrice}$`
                    }
                </div>
                    <button  className="product-cart-add d-inline mt-0" onClick={handleCheckOut} > Complete Purchase</button>
                <button onClick={handleDeleteCart} className="product-cart-add  my-2"> Clear Cart</button>
            </Col>
            <ToastContainer/>
        </Row>
    )
}

export default CartCheckout
