import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import CartItem from '../../components/Cart/CartItem'
import CartCheckout from '../../components/Cart/CartCheckout'
import GetAllUserCartHook from '../../hook/cart/get-all-user-cart-hook'
import SweetAlert from '../../components/Utility/SweetAlert'

const CartPage = () => {
    const [itemsNum, cartItems, totalCartPrice, couponNameRes,
        totalCartPriceAfterDiscount, cartID, loading] = GetAllUserCartHook()
    return (
        <Container style={{ minHeight: '670px' }}>
            <Row>
                <div className='cart-title mt-4'>Cart</div>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col xs="12" md="9">
                {
                    loading === false ? (
                        cartItems.length >=1 ? (cartItems.map((item,index)=>{
                            return(<CartItem  item={item} key={index}/>)
                        })) :  (<SweetAlert msg='Not Found Items In Cart'/>)
                    ) : <Spinner className='mt-5'  animation='border' variant='primary'/>
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
