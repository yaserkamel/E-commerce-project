import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { forgetPassword } from '../../redux/action/authAction'
import { useEffect } from 'react'
import notify from '../useNotification'

const ForgetPasswordHook = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onSubmit = async () => {
    if(email === "" ){
      notify("Please Enter Email" , "error")
      return;
    }
    localStorage.setItem("user-email",email)

    setLoading(true)
    await dispatch(forgetPassword({
      email,
    }))
    setLoading(false)
    console.log(loading)
  }

  const res  =useSelector(state => state.authReducer.forgetPassword )
  useEffect(()=>{
    if(loading===false){
      if(res){
        if(res.data.status === "Success"){
          notify("The code has been sent to your email", "success")
          setTimeout(()=>{
            navigate('/user/verify-code')
          }, 1000)
        }
        if(res.data.status === "fail"){
          notify("There is no user with this email address", "error")
        }
        if(res.data.status === "error"){
          notify("There was an error sending the email. Try again later!", "error")
        }
      }
    }
  },[loading])
  return [onSubmit,onChangeEmail, email, loading]
}

export default ForgetPasswordHook
