import React, { useState } from 'react'
import notify from '../../hook/useNotification'
import { useDispatch, useSelector } from 'react-redux';
import { creatNewUser, loginUser } from '../../redux/action/authAction';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginHook = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loading,setloading] = useState(true)
  const [isPress,setIsPress] = useState(false)


  const onChangeEmail=(e)=>{
    setEmail(e.target.value)
  }
  const onChangePassword=(e)=>{
    setPassword(e.target.value)
  }

  
  const ValidationValues = ()=>{
     if(email === "" ){
      notify("Please Enter Email" , "error")
      return;
    }
    else if(!EMAIL_REGEX.test(email)){
      notify("Please Enter a Valid Email" , "error")
      return;
    }
    else if(password === "" ){
      notify("Please Enter Password" , "error")
      return;
    }
  }

  const onSubmit=async()=>{
    ValidationValues();
    setIsPress(true)
    setloading(true)
    await dispatch(loginUser({
      email,
      password
    }))
    setIsPress(false)
    setloading(false)
  }

  const res = useSelector(state => state.authReducer.loginUser)

  useEffect(()=>{
    if(loading===false){
      if(res){
        if(res.data.token){
          localStorage.setItem("token", res.data.token)
          localStorage.setItem("user", JSON.stringify(res.data.data))
          notify("Successfuly Logged","success")
          setTimeout(()=>{
            window.location.href = '/'
          },2000)
        }
        else{
          localStorage.removeItem("token")
          localStorage.removeItem("user")
        }

        if(res.data.message === "Incorrect email or password"){
          localStorage.removeItem("token")
          localStorage.removeItem("user")
          notify("Incorrect email or password","error")
        }
      }
        // console.log(res)
    }
  },[loading])









  return [email, password, loading, onChangeEmail, onChangePassword,onSubmit,isPress]
}

export default LoginHook
