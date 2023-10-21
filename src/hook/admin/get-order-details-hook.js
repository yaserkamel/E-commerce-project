import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  getOneOrders } from '../../redux/action/orderAction';

const GetOrderDetailsHook = (id) => {
  
  const dispatch = useDispatch();
  const [loading, setLoading] = useState( true)
  const [orderData,setOrderData] = useState([])
  const [cartItem,setCartItem] = useState([])


  const get = async()=>{
      setLoading(true)
      await dispatch(getOneOrders(id))
      setLoading(false)
  }

  useEffect(()=>{
      get()
  },[])

  const resOneOrders = useSelector(state=> state.orderReducer.getOneOrders)
  useEffect(()=>{
      if(loading===false){
        if(resOneOrders.data)
         setOrderData(resOneOrders.data)
        if(resOneOrders.data.cartItem)
         setCartItem(resOneOrders.data.cartItem)
  }
  },[loading])

  return [orderData,cartItem]
}

export default GetOrderDetailsHook
