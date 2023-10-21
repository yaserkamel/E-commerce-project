import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOneUserAdress } from '../../redux/action/userAdressAction';
import GetAllUserCartHook from '../cart/get-all-user-cart-hook';
import notify from '../useNotification';
import {createOrderCash} from '../../redux/action/checkoutAction'
import { useNavigate } from 'react-router-dom';

const OrderPayCashHook = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const [loadingCreate, setLoadingCreate] = useState(true)
  const [addressDetails, setAddressDetails] = useState([])

  const [, , , , , cartID] = GetAllUserCartHook()

  const handleChooseAddress=(e)=>{
    if(e.target.value !== 0){
      get(e.target.value)
    }
  }

  const get=async(id)=>{
    setLoading(true)
    await dispatch(getOneUserAdress(id))
    setLoading(false)
  }

  const res = useSelector(state=> state.userAdressReducer.oneAddress)
  useEffect(()=>{
    if(loading===false){
      if(res && res.status==="success"){
        setAddressDetails(res.data)
      }else{
        setAddressDetails([])
      }
    }
  },[loading])

  const handleCreateOrderCash = async()=>{
    if(cartID === '0'){
      notify('Please first enter products to cart', 'warn')
      return
    }
    if(addressDetails.length <= 0){
      notify('Please first enter address', 'warn')
      return
    }
    setLoadingCreate(true)
    await dispatch(createOrderCash(cartID, {
      shippingAddress:{
        details: addressDetails.alias,
        phone: addressDetails.phone,
        city: "",
        postalCode: ""
      }
    }))
    setLoadingCreate(false)
  }


  const resOrderCash = useSelector(state=> state.checkoutReducer.createOrderCash)
  useEffect(()=>{
    if(loadingCreate === false){
      if(resOrderCash && resOrderCash.status === 201){
        notify('Successfully order created ', 'success')
        setTimeout(()=>{
          navigate('/user/allorders')
        }, 1500)
      }else{
        notify('There is a probleme please try again', 'warn')
      }
    }
  },[loadingCreate])

  return [handleChooseAddress, addressDetails, handleCreateOrderCash]
}

export default OrderPayCashHook
