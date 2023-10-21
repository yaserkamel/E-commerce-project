import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import Pagination from '../../components/Utility/Pagination'
import { useParams } from 'react-router-dom'
import ViewAllProductsBrandHook from '../../hook/product/view-all-products-brand-hook'

const ProductByBrandPage = () => {

  const {id}=useParams()
  const [items,pagination,onPress] = ViewAllProductsBrandHook(id)
  if(pagination)
    var pageCount=pagination
  else
    pageCount=0

  return (
    <div style={{minHeight:'670px'}}>
    <Container>
      <Row className='d-flex flex-row' >
        <Col sm='12'>
          <CardProductsContainer products={items} title='' btntitle='' link='/allbrand'  msg='Not Found Products For This Brand.'/>
        </Col>
      </Row>
    </Container>
    {
      pageCount >1?(<Pagination pageCount={pageCount} onPress={onPress}/>):null
    }
  </div>
  )
}

export default ProductByBrandPage
