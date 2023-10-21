import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BrandCard = ({img, id}) => {
  return (
    <Col
        xs="6"
        sm="6"
        md="4"
        lg="2"
        className="my-2 d-flex justify-content-center">
        <Card
          className="my-1"
          style={{
            width: "100%",
            height: "151px",
            // padding: '10px',
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
          }}>
          <Link to={`/products/brand/${id}`} style={{textDecoration:'none'}}>
            <Card.Img style={{ width: "100%", height: "151px", padding: '30px' }} src={img} />
          </Link>
        </Card>
      </Col>
  )
}

export default BrandCard