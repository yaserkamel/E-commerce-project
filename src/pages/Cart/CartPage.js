import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CartItem from '../../components/Cart/CartItem'
import CartCheckout from '../../components/Cart/CartCheckout'
import GetAllUserCartHook from '../../hook/cart/get-all-user-cart-hook'
import SweetAlert from '../../components/Utility/SweetAlert'

const CartPage = () => {
    const [itemsNum, cartItems, totalCartPrice, couponNameRes, totalCartPriceAfterDiscount] = GetAllUserCartHook()
    return (
        <Container style={{ minHeight: '670px' }}>
            <Row>
                <div className='cart-title mt-4'>عربة التسوق</div>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col xs="12" md="9">
                {
                    cartItems.length >=1 ? (cartItems.map((item,index)=>{
                        return(<CartItem  item={item} key={index}/>)
                    })) :  (<SweetAlert msg='Not Found Items In Cart'/>)
                }
                    
                </Col>

                <Col xs="6" md="3">
                    <CartCheckout cartItems={cartItems} couponNameRes={couponNameRes} 
                    totalCartPriceAfterDiscount={totalCartPriceAfterDiscount} totalCartPrice={totalCartPrice} />
                </Col>
            </Row>
        </Container>
    )
}

export default CartPage
