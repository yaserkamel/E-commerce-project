import React from 'react'
import { Card, Col } from 'react-bootstrap'
import rate from "../../images/rate.png";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import ProductCardHook from '../../hook/product/product-card-hook';



const ProductCard = ({item, favProd}) => {
    
    const [favImg, handleFav] = ProductCardHook(item, favProd);


    return (
        
        <Col xs="10" sm="6" md="4" lg="3" className="d-flex m-auto">
            <Card
                className="py-2 my-2"
                style={{
                    width: "100%",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    boxShadow:" 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
                }}>

                <Link to={`/products/${item._id}`} style={{ textDecoration: 'none' }} >
                    <div className='d-flex justify-content-center py-2'>
                        <Card.Img style={{ objectFit:'contain', height: "228px", width: "80%" }} src={item.imageCover} />
                    </div>
                </Link>
                <div className="d-flex justify-content-end mx-2">
                    <img
                        src={favImg}
                        alt=""
                        onClick={handleFav}
                        className="mt-1 me-2 "
                        style={{
                            height: "24px",
                            width: "24px",
                            cursor: 'pointer',
                            // objectFit: 'contain'
                        }}
                    />
                </div>
                <Card.Body className='py-2 px-2'>
                    <Card.Title>
                        <div className="card-title">
                            {item.title} 
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between ">
                            <div className="d-flex align-items-center">
                                <img
                                    className=""
                                    src={rate}
                                    alt=""
                                    height="16px"
                                    width="16px"
                                />
                                <div className="card-rate mx-2">{item.ratingsAverage || 0}</div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="card-price">
                                    {
                                        item.priceAfterDiscount >= 1 ? (
                                        <div>
                                            <span style={{textDecoration:'line-through',marginRight: '10px'}}>{item.price}$</span>
                                            {item.priceAfterDiscount}$
                                        </div>    
                                        ): `${item.price}$`  
                                    }
                                </div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            <ToastContainer/>
        </Col>
        
    )
}

export default ProductCard