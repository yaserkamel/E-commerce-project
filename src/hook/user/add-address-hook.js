import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import notify from '../useNotification'
import { addUserAdress } from '../../redux/action/userAdressAction'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AddAddressHook = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [alias,setAlias]= useState('')
  const [details,setDetails]= useState('')
  const [phone,setPhone]= useState('')
  const [loading,setLoading]= useState(true)

  const onChangeAlias=(event)=>{
    event.persist()
    setAlias(event.target.value)
  }
  const onChangeDetails=(event)=>{
    event.persist()
    setDetails(event.target.value)
  }
  const onChangePhone=(event)=>{
    event.persist()
    setPhone(event.target.value)
  }
  
  const onSubmit=async()=>{
    if(alias===""||details===""||phone===""){
      notify("please enter the all inputs","warn")
      return
    }
    setLoading(true)
    await dispatch(addUserAdress({
    alias:alias,
    details:details,
    phone:phone,
    city : "cairo",
    postalCode: "41516",
    }))
    setLoading(false)
  }

  const res = useSelector(state => state.userAdressReducer.addUserAdress)

  useEffect(()=>{
    if(loading===false){
      if(res && res.status === 200){
        notify("Address Added Successfuly","success")
        setTimeout(()=>{
          navigate('/user/addresses')
        },1000)
      }else {
        notify("There is a probleme with add address","error")
      }
      
    }
  },[loading])


  return [alias,details,phone,onChangeAlias,onChangeDetails,onChangePhone,onSubmit]
}

export default AddAddressHook
