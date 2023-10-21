import React, { useState } from 'react'
import notify from '../../hook/useNotification'
import { useDispatch, useSelector } from 'react-redux';
import { creatNewUser } from '../../redux/action/authAction';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterHook = () => {

  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  const res = useSelector(state => state.authReducer.createUser)

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [loading,setloading] = useState(true)
  

  
  const onChangeName=(e)=>{
    setName(e.target.value)
  }
  const onChangeEmail=(e)=>{
    setEmail(e.target.value)
  }
  const onChangePhone=(e)=>{
    setPhone(e.target.value)
  }
  const onChangePassword=(e)=>{
    setPassword(e.target.value)
  }
  const onChangeConfirmPassword=(e)=>{
    setConfirmPassword(e.target.value)
  }

  const ValidationValues = ()=>{
    if(name === "" ){
      notify("Please Enter Username" , "error")
      return;
    }
    else if(email === "" ){
      notify("Please Enter Email" , "error")
      return;
    }
    else if(!EMAIL_REGEX.test(email)){
      notify("Please Enter a Valid Email" , "error")
      return;
    }
    else if(phone.length <= 10){
      notify("Please Enter a Valid Phone" , "error")
      return;
    }
    else if(password === "" ){
      notify("Please Enter Password" , "error")
      return;
    }
    else if(password !== confirmPassword){
      notify("Please Check On Password" , "error")
      return;
    }
  }

  const onSubmit = async() => {
    ValidationValues();
    setloading(true)
    await dispatch(creatNewUser({
      name,
      email,
      password,
      passwordConfirm:confirmPassword,
      phone
    }))
    setloading(false)
  }

  useEffect(()=>{
    if(loading===false){
      if(res){
        console.log(res)
      if(res.data.token){
        localStorage.setItem("token" , res.data.token)
        notify("Successfully Signup", "success")
        setTimeout(() => {
          navigate("/login")
        }, 2000);
      }
      if(res.data.errors){
        if(res.data.errors[0].msg === "E-mail already in use"){
          notify("E-mail is already in use", "error")
        }
      }

      if(res.data.errors){
        if(res.data.errors[0].msg === "accept only egypt phone numbers"){
          notify("Accept only egypt phone numbers", "error")
        }
      }

      if(res.data.errors){
        if(res.data.errors[0].msg === "must be at least 6 chars"){
          notify("Password must be at least 6 chars", "error")
        }
      }
      }
    }
  },[loading])

  return [name,email,phone,password,confirmPassword,loading,
    onChangeName,onChangeEmail,onChangePhone,onChangePassword,onChangeConfirmPassword,onSubmit]
  
}
