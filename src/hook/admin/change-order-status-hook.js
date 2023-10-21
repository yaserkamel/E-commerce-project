import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  changeOrderDeliver, changeOrderPay, getOneOrders } from '../../redux/action/orderAction';
import notify from '../useNotification';

const ChangeOrderStatusHook = (id) => {
  
  const dispatch = useDispatch();
  const [loading, setLoading] = useState( true)
  const [loadingDeliver, setLoadingDeliver] = useState( true)
  const [pay,setPay] = useState(0)
  const [deliver,setdDeliver] = useState(0)

  const formatDate = (dateString)=>{
    const options = {year: 'numeric' , month: 'numeric' , day: 'numeric'};
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  const onChangePaid=(e)=>{
    setPay(e.target.value)
  }

  const onChangeDeliver =(e)=>{
    setdDeliver(e.target.value)
  }
  const changePayOrder = async()=>{
    if(pay==="true"){
      setLoading(true)
      await dispatch(changeOrderPay(id))
      setLoading(false)
    }else if(pay ==="0"){
      notify("please enter value","warn")
    }
  }
  const ChangeDeliverOrder = async()=>{
    if(deliver==="true"){
      setLoadingDeliver(true)
      await dispatch(changeOrderDeliver(id))
      setLoadingDeliver(false)
    }else if(deliver ==="0"){
      notify("please enter value","warn")
    }
      
  }



  const resOneOrders = useSelector(state=> state.orderReducer.changePay)
  useEffect(()=>{
    if(loading===false){
      if(resOneOrders && resOneOrders.status ===200){
        notify("Success","success")
        setTimeout(() => {
          window.location.reload(false)
        }, 1000);
      }else{
        notify("Failed","error")
      }
    } 
  },[loading])
  
  const resDeliverOrder = useSelector(state=> state.orderReducer.changeDeliver)
  useEffect(()=>{
    if(loadingDeliver === false){
      if(resDeliverOrder && resDeliverOrder.status ===200){
        notify("Success","success")
        setTimeout(() => {
          window.location.reload(false)
        }, 1000);
      }else{
        notify("Failed","error")
      }
    } 
  },[loadingDeliver])

  return [formatDate,onChangePaid,changePayOrder,onChangeDeliver,ChangeDeliverOrder]
}

export default ChangeOrderStatusHook
