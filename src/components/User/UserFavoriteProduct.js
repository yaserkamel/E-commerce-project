import React from 'react'
import { Row, Spinner } from 'react-bootstrap';
import Pagination from '../Utility/Pagination';
import CardProductsContainer from '../Products/CardProductsContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { getProductWishList } from '../../redux/action/wishListAction';
import { ToastContainer } from 'react-toastify';
const UserFavoriteProduct = () => {

    const dispatch  = useDispatch();
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const res = useSelector(state => state.wishListReducer.allWishList)

    useEffect(()=>{
        const get =async ()=>{
            setLoading(true)
            await dispatch(getProductWishList())
            setLoading(false)
        }
        get()
    },[])
    useEffect(()=>{
        if(loading === false){
            if(res.status === 'success'){
                console.log(res)
                setItems(res.data);
            }else
                setItems([])
        }
    },[loading])
    
    console.log(items.length)
    return (
        <div>
            <div className="admin-content-text pb-4">Favorite List</div>
            <Row className='justify-content-start'>
                <CardProductsContainer products={items} title='' btntitle='' msg='No Favorite Products'/> 
            </Row>
            <ToastContainer/>
        </div>
    )
}

export default UserFavoriteProduct
