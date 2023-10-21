import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import CategoryHeader from '../../components/Category/CategoryHeader'
import SearchCountResult from '../../components/Utility/SearchCountResult'
import SideFilter from '../../components/Utility/SideFilter'
import ViewSearchProductsHook from '../../hook/product/view-search-product-hook'
import Pagination from '../../components/Utility/Pagination'
import { ToastContainer } from 'react-toastify'

const ShopProductsPage = () => {

  const [items, pagination, onPress, getProduct, results] = ViewSearchProductsHook();

  if(pagination)
    var pageCount = pagination 
  else
    pageCount=0
  

  return (
    <div style={{minHeight:'670px'}}>
      <CategoryHeader/>
      <Container>
        <SearchCountResult onClick={getProduct} title={`There are ${results} results`}/>
        <Row className='d-flex flex-row' >
          <Col sm='2' xs='2' md='1' className='d-flex'>
            <SideFilter/>
          </Col>
          <Col sm='10' xs='10' md='11'>
            <CardProductsContainer products={items} title='' btntitle='' msg='No Results For Your Search'/>
          </Col>
        </Row>
      </Container>
      {
        pageCount >1?(<Pagination pageCount={pageCount} onPress={onPress}/>):null
      }
      <ToastContainer/>
    </div>
  )
}

export default ShopProductsPage