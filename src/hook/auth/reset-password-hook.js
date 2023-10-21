import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from '../useNotification';
import { resetPassword } from '../../redux/action/authAction';
import { useEffect } from 'react';

export const ResetPasswordHook = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const[loading,setLoading]= useState(true)
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }


  const onSubmit = async () => {
    if(password === "" ){
      notify("Please Enter password" , "error")
      return;
    }
    if(confirmPassword != password ){
      notify("password error " , "error")
      return;
    }

    setLoading(true)
    await dispatch(resetPassword(
      { email:localStorage.getItem("user-email"),
         newPassword: password
     }
    ))
    setLoading(false)
    console.log(loading)
  }

  const res  =useSelector(state => state.authReducer.resetPassword )
  useEffect(()=>{
    if(loading===false){
      if(res){
        if(res.data.status === "Success"){
          notify("The password has been changed successfully", "success")
          setTimeout(()=>{
            navigate('/login')
          }, 1000)
        }
        if(res.data.status === "fail"){
          notify("Please request a new code", "error")
        }
       
      }
    }
  },[loading])
  return [password,confirmPassword, onChangePassword, onChangeConfirmPassword, onsubmit]
}
