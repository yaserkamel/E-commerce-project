import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../Utility/Breadcrumbs';



const CategoryContainer = ({data, loading}) => {

  
  
  const colors = ["#FFD3E8", "#F4DBA5" , "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]
    return (
      <Container  >
        <Breadcrumbs/>
        
 
        <Row className='my-2 d-flex justify-content-center'>
        {
          loading === false ? (
          data ? (
              
            data.map((item, index)=>{
              return (
                <CategoryCard key={index} title={item.name} id={item._id} img={item.image} 
                background={colors[Math.floor(Math.random()* 5) +1]}/>
              )
            })
            
          ) : <h3>No Categories</h3>
          ) : <Spinner className='m-auto' animation='border' variant='primary'/>
        }
        
        </Row>
      </Container>
    )
}

export default CategoryContainer

