import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCoupon, getAllCoupon } from '../../redux/action/couponAction'
import notify from '../useNotification';

const AddCouponHook = () => {
  const dispatch = useDispatch()
  const [coupnName,setCoupnName]= useState('')
  const [coupnDate,setCoupnDate]= useState('')
  const [coupnValue,setCoupnValue]= useState('')
  const [loading,setLoading]= useState(true)

  const onChangeName=(event)=>{
    event.persist()
    setCoupnName(event.target.value)
  }
  const onChangeDate=(event)=>{
    event.persist()
    setCoupnDate(event.target.value)
  }
  const onChangeValue=(event)=>{
    event.persist()
    setCoupnValue(event.target.value)
  }

  const onSubmit=async()=>{
    if(coupnName===""||coupnDate===""||coupnValue===""){
      notify("please enter the all inputs","warn")
      return
    }
    setLoading(true)
    await dispatch(addCoupon({
      name: coupnName,
      expire: coupnDate,
      discount: coupnValue
    }))
    setLoading(false)
  }


  const res = useSelector(state => state.couponReducer.addCoupon)
  const allCoupon = useSelector(state => state.couponReducer.allCoupon)
  useEffect(()=>{
    if(loading===false){
      if(res && res.status === 201){
        notify("Added Successfuly","success")
        window.location.reload(false)
      }else if(res && res.status === 400){
        notify("Added Failed","error")
      }
      
    }
  },[loading])


  useEffect(()=>{
    const get=async()=>{
      await dispatch(getAllCoupon())
    }
    get()
  },[])

  return [coupnDate,coupnName,coupnValue,onChangeDate,onChangeName,onChangeValue,onSubmit,allCoupon]
}

export default AddCouponHook
