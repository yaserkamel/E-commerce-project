import React from 'react'
import CategoryHeader from '../../components/Category/CategoryHeader'
import { Col, Container, Row } from 'react-bootstrap'
import SideFilter from '../../components/Utility/SideFilter'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import Pagination from '../../components/Utility/Pagination'
import ViewSearchProductsHook from '../../hook/product/view-search-product-hook'
import { useParams } from 'react-router-dom'
import ViewAllProductsCategoryHook from '../../hook/product/view-all-products-category-hook'

const ProductByCategoryPage = () => {

  const {id}=useParams()
  const [items,pagination,onPress]=ViewAllProductsCategoryHook(id)
  if(pagination)
    var pageCount=pagination
  else
  pageCount=0

  return (
    <div style={{minHeight:'670px'}}>
    <Container>
      <Row className='d-flex flex-row' >
        <Col sm='12'>
          <CardProductsContainer products={items} title='' btntitle='' link='/allCategory' msg='Not Found Products For This Category.'/>
        </Col>
      </Row>
    </Container>

    {
      pageCount >1?(<Pagination pageCount={pageCount} onPress={onPress}/>):null
    }
    
  </div>
  )
}

export default ProductByCategoryPage
