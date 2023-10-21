import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTitle from '../Utility/SubTitle'
import ProductCard from './ProductCard'
import CardContainerHook from '../../hook/product/card-container-hook'
import Swal from 'sweetalert2'
import SweetAlert from '../Utility/SweetAlert'



const CardProductsContainer = ({title, btntitle, pathtext , products, link, msg}) => {

    const [favProd, loading] = CardContainerHook();


    return (
        <Container >


            { products ? (<SubTitle  title={title} btntitle={btntitle} pathtext={pathtext} />) : null }
            
            <Row className='my-2 d-flex justify-content-first'>
                {
                    loading === false ? (
                        products.length >=1 ? (products.map((item , index ) => 
                    {
                        return(<ProductCard favProd={favProd} key={index} item={item}/>)
                    })) :(<SweetAlert link={link} msg={msg}/>)
                    ) : <Spinner className='m-auto' animation='border' variant='primary'/>
                    
                }
            </Row>
        </Container>
    )
}

export default CardProductsContainer