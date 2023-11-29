import React, {useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import ViewProductDetailsHook from '../../hook/product/view-product-details-hook';
import AddToCartHook from '../../hook/cart/add-to-cart-hook';
import { ToastContainer } from 'react-toastify';
import rate from '../../images/rate.png'

const ProductText = () => {

  const { id } = useParams();
  const [item, images, cat, brand , prod] = ViewProductDetailsHook(id);
  // console.log(item)

  const [indexColor, colorClick, addToCartHandle] = AddToCartHook(id,item)
  return (
    <div>
      <Row >
        <Col md="8" className="mb-4 ">
          <div className="cat-title d-flex flex-column align-items-start">{item.title}
            <div className="cat-rate d-inline me-3 ms-2">
            <img className="" src={rate} alt="rate" height="16px" width="16px" />
              {` ( ${item.ratingsAverage || 0} )`}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8">
          <div className="product-price" style={{textAlign: 'left'}}>
            {
              item.priceAfterDiscount >= 1 ? (
                <div>
                  <span className='me-2' style={{textDecoration:'line-through', color: '#818181'}}>{`${item.price}$`}</span>
                  {`${item.priceAfterDiscount || 0}$`}
                </div>
            ):`${item.price || 0} $`
            }
          </div>
        </Col>
      </Row>
      <Row className="mt-2">
        <div className="cat-text">Details : 
          <div className="product-description d-inline ms-2">
              {item.description}
          </div>
        </div>
        
      </Row>
      <Row >
        <Col md="8" className="mt-2">
          <div className="cat-text">Category : 
            <div className="d-inline ms-2 text-dark">{cat.name}</div>
          </div>
        </Col>
      </Row>
      
      
      <Row>
        <Col md="8" className="mt-2">
          <div className="cat-text d-inline"> Brand :</div>
          <div className="barnd-text d-inline mx-1">{brand.name} </div>
        </Col>
      </Row>
      
      
      <Row>
        <Col md="8" className="mt-2">
          <div className="cat-text d-inline"> Quantity :</div>
          <div className="barnd-text d-inline mx-1">{item.quantity} </div>
        </Col>
      </Row>
      
      
      <Row>
        <Col md="8" className="mt-2 d-flex justify-content-start">
        <div className="cat-text d-inline"> Colors :</div>
          {
            item.availableColors ? ( item.availableColors.map((color, index) => {
              return (
                <div
                  onClick={()=>{colorClick(index, color)}}
                  key={index}
                  className="color mx-1"
                  style={{ backgroundColor: color, border: indexColor === index? '2px solid black' : 'none' }}>
                </div>
              )
            })) : null
          }

        </Col>
      </Row>
      <Row className="">
        <Col md="12">
          <div onClick={addToCartHandle} className="product-cart-add">Add To Cart</div>
        </Col>
      </Row>
      <ToastContainer/>
</div>
)
}

export default ProductText
