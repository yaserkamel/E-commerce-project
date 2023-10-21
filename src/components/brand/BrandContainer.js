import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap';
import BrandCard from './BrandCard';

const BrandContainer = ({data, loading}) => {

    return (
        <Container>
            <div className="admin-content-text mt-2 ">All Brands</div>
            <Row className='my-1 d-flex justify-content-between'>
                {
                    loading === false ? (
                    data ? (
                        data.slice(0,6).map((item, index)=>{
                        return (
                            <BrandCard id={item._id} key={index} img={item.image} />
                        )
                        })
                    ) : <h3>No Brands Found</h3>
                    ) : <Spinner className='m-auto' animation='border' variant='primary'/>
                }
            </Row>
        </Container>
    )
}

export default BrandContainer