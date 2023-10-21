import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOneUserAdress } from '../../redux/action/userAdressAction';
import GetAllUserCartHook from '../cart/get-all-user-cart-hook';
import notify from '../useNotification';
import {createOrderCard} from '../../redux/action/checkoutAction'
import { useNavigate } from 'react-router-dom';

const OrderPayCardHook = (addressDetails) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const [, , , , , cartID] = GetAllUserCartHook()


  const handleCreateOrderCard= async()=>{
    if(cartID === '0'){
      notify('Please first enter products to cart', 'warn')
      return
    }
    if(addressDetails.length <= 0){
      notify('Please first enter address', 'warn')
      return
    }
    setLoading(true)
    await dispatch(createOrderCard(cartID, {
      shippingAddress:{
        details: addressDetails.alias,
        phone: addressDetails.phone,
        city: "",
        postalCode: ""
      }
    }))
    setLoading(false)
  }

  const resOrderCard = useSelector(state=> state.checkoutReducer.createOrderCard)
  useEffect(()=>{
    if(loading === false){
      if(resOrderCard && resOrderCard.status === 'success'){
        notify('Successfully order created ', 'success')
        if(resOrderCard.session.url){
          window.open(resOrderCard.session.url)
        }
      }else{
        notify('There is a probleme please try again', 'warn')
      }
    }
  },[loading])



  return [handleCreateOrderCard ]
}

export default OrderPayCardHook
