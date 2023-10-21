import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTitle from '../Utility/SubTitle'
import CategoryCard from '../Category/CategoryCard';
import { HoomCategoryHook } from '../../hook/category/hoom-category-hook';

const HomeCategory = () => {

  const [category,loading,colors]=HoomCategoryHook()
  return (
    <Container >
      <SubTitle  title="Categories" btntitle="More" pathtext='/allCategory' />
      <Row className='my-2 d-flex justify-content-between'>   
      {
        loading === false ? (
        category.data ? (

          category.data.slice(0,6).map((item, index)=>{
            return (
              <CategoryCard key={index} title={item.name} img={item.image} id={item._id} background={colors[index]}/>
            )
          })
          
        ) : <h3>No Categories</h3>
        ) : <Spinner className='m-auto' animation='border' variant='primary'/>
      }
      
      </Row>
    </Container>
  )

  
}

export default HomeCategory