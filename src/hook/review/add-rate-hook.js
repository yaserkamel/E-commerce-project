import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { json, useNavigate } from 'react-router-dom';
import notify from '../useNotification';
import { createReview } from '../../redux/action/reviewAction';
import { useEffect } from 'react';
export const AddRateHook = (id) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const [rateText, setRateText] = useState('');
  const [rateValue, setRateValue] = useState("0");
  const [loading, setLoading] = useState(true)

  const onChangeRateText = (e) => {
    setRateText(e.target.value)
  }
  const onChangeRateValue = (val) => {
    setRateValue(val)
  }

  var user
  if(localStorage.getItem("user") !=null)
  user=JSON.parse(localStorage.getItem("user"))

  const onSubmit=async()=>{
    if(rateText===""){
      notify("Please write a comment","error")
      return
    }
    setLoading(true)
    await dispatch(createReview(id , {
      review: rateText,
      rating: rateValue
    }))
    setLoading(false)
  }

  const res = useSelector(state => state.reviewReducer.createReview)

  useEffect(()=>{
    if(loading===false){
      if(res){
        console.log(res)
        if(res.status && res.status===403){
          notify("The admin is not allowed to evaluate","error")
          return
        }else if(res.data.errors && res.data.errors[0].msg==='You already added review on this product' ){
          notify('You already added review on this product',"error")
        }else if(res.status && res.status===201){
          notify("Your comment has been added","success")
          setTimeout(() => {
            window.location.reload(false)
          }, 1000);
        }
      }
    }
  },[loading])
  return[rateText,rateValue,onChangeRateText,onChangeRateValue,user,onSubmit]


}
