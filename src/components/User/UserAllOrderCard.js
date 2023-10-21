import React from 'react'
import { Row, Col } from 'react-bootstrap'
import mobile from '../../images/mobile.png'
import { Link } from 'react-router-dom'

const UserAllOrderCard = ({cartItem}) => {
    return (
        <div>
            <Row className="d-flex mb-2">
                <Col xs="3" md="2" className="d-flex justify-content-start">
                <Link to={`/products/${cartItem.product._id}`} style={{textDecoration:"none"}}>
                    <img width="93px" height="120px" src={cartItem.product.imageCover} alt="" />
                </Link>
                </Col>
                <Col xs="8" md="6">
                    <div className="d-inline pt-2 cat-title">
                    {cartItem.product.title||""}
                    </div>
                    <div className="d-inline pt-2 cat-rate ms-2">{cartItem.product.ratingsAverage ? cartItem.product.ratingsAverage : 0}</div>
                    <div className="rate-count d-inline p-1 pt-2">{`(${cartItem.product.ratingsQuantity||0} Rate)`}</div>
                    <div className="mt-3">
                        <div className="cat-text  d-inline">Amount</div>
                        <input
                            value={cartItem.count}
                            className="mx-2 "
                            type="number"
                            style={{ width: "40px", height: "25px" }}
                        />
                        <div
                            className="color me-2 "
                            style={{ backgroundColor: cartItem.color }}>
                        </div>  
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderCard
