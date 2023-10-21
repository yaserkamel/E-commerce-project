import React from 'react'
import Slider from '../../components/home/Slider'
import HomeCategory from '../../components/home/HomeCategory'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import DiscountSection from '../../components/home/DiscountSection'
import BrandFeatured from '../../components/brand/BrandFeatured'
import ViewHomeProductHook from '../../hook/product/view-home-product-hook'

const HomePage = () => {

  const [items] = ViewHomeProductHook();
  return (
    <div>
      
      <Slider/>
      <HomeCategory/>
      <CardProductsContainer products={items} title='More Sale' btntitle='More' pathtext="/products"/>
      <DiscountSection/>
      <CardProductsContainer  products={items} title='Latest Fashion ' btntitle='More' pathtext="/products"/>
      <BrandFeatured title='Famous Brand' btntitle='More'   />
      
    </div>
  )
}

export default HomePage
