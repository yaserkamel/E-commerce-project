import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCoupon, editCoupon, getAllCoupon, getOneCoupon } from '../../redux/action/couponAction'
import notify from '../useNotification';
import { useNavigate } from 'react-router-dom';


const EditCouponHook = (id) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [coupnName,setCoupnName]= useState('')
  const [coupnDate,setCoupnDate]= useState('')
  const [coupnValue,setCoupnValue]= useState('')
  const [loading,setLoading]= useState(true)
  const [loadingData,setLoadingData]= useState(true)


  const formatDate = (dateString)=>{
    const options = {year: 'numeric' , month: 'numeric' , day: 'numeric'};
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const res = useSelector(state => state.couponReducer.oneCoupon)
  console.log(res)

  useEffect(()=>{
    const get=async()=>{
      setLoadingData(true)
      await dispatch(getOneCoupon(id))
      setLoadingData(false)
    }
    get()
  },[])

  useEffect(()=>{
    if(loadingData === false){
      if(res.data){
        setCoupnName(res.data.name)
        setCoupnDate(formatDate(res.data.expire))
        setCoupnValue(res.data.discount)
      }
    }

  }, [loadingData])

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
    await dispatch(editCoupon(id,{
      name: coupnName,
      expire: coupnDate,
      discount: coupnValue
    }))
    setLoading(false)
  }

  const resEditCoupon = useSelector(state=> state.couponReducer.editCoupon)

  useEffect(()=>{
    if(loading===false){
      
      if(resEditCoupon && resEditCoupon.status === 200){
        notify("Edite Successfuly","success")
        setTimeout(() => {
          navigate("/admin/addcoupon")
        }, 1000);
      }else{
        notify("Edite Failed","error")
      }
      
    }
  },[loading])




  return [coupnDate,coupnName,coupnValue,onChangeDate,onChangeName,
          onChangeValue,onSubmit]
}

export default EditCouponHook
