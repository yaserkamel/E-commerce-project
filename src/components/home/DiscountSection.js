import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import laptops from '../../images/laptops.png'

const DiscountSection = () => {
  return (
    <Container>
            <Row className="discount-backcolor my-3  mx-1 d-flex text-center align-items-center">
                <Col sm="6">
                    <div className="discount-title">
                        SOLD 30% FOR LAPTOPS
                    </div>
                </Col>
                <Col sm="6">
                    <img className="dicount-img" src={laptops} alt="" />
                </Col>
            </Row>
        </Container>
  )
}

export default DiscountSection