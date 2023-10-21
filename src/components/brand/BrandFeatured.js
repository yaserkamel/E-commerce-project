import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTitle from '../Utility/SubTitle'
import BrandCard from './BrandCard'
import HoomBrandHook from '../../hook/brand/home-brand-hook';

const BrandFeatured = ({title, btntitle}) => {

  const [brand, loading] = HoomBrandHook();
  console.log(brand)

  return (
    <Container >
      <SubTitle  title={title} btntitle={btntitle} pathtext='/allbrand'/>
      <Row className='my-2 d-flex justify-content-between'>
          {
            loading === false ? (
            brand.data ? (
              brand.data.slice(0,6).map((item, index)=>{
                return (
                  <BrandCard id={item._id}  key={index} img={item.image} />
                )
              })
            ) : <h3>No Brands Found</h3>
            ) : <Spinner className='m-auto' animation='border' variant='primary'/>
          }
      </Row>
  </Container>
  )
}


export default BrandFeatured