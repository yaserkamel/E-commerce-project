import React, { useEffect } from 'react'
import CategoryHeader from '../../components/Category/CategoryHeader'
import ProductDetails from '../../components/Products/ProductDetails'
import { Container } from 'react-bootstrap'
import RateContainer from '../../components/Rate/RateContainer'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import ViewProductDetailsHook from '../../hook/product/view-product-details-hook'
import { Link, useParams } from 'react-router-dom'

const PorductDetailsPage = () => {
  const {id} = useParams()
  const [item, images, cat, brand , prod] = ViewProductDetailsHook(id)

  if(prod)
    var items = prod.slice(0,4)

  if(item){
    var rateAvg = item.ratingsAverage;
    var rateQty = item.ratingsQuantity;
  }
  return (
    <div style={{minHeight:'670px'}}>
      <CategoryHeader/>
      
      <Container>
      <nav>
          <ol class="breadcrumb-list">
            <li class="breadcrumb-itemm"><Link to="/">Home</Link></li>
            <li class="breadcrumb-itemm active">{item.title}</li>
          </ol>
        </nav>
        <ProductDetails/>
        <RateContainer rateAvg={rateAvg} rateQty={rateQty}/>
        <CardProductsContainer products={items} title='Products You May Like'/>
      </Container>
    </div>
  )
}

export default PorductDetailsPage
