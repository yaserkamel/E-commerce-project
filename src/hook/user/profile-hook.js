import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserPassword, updateUserProfileData } from '../../redux/action/authAction'
import notify from "../useNotification"
import { useNavigate } from 'react-router-dom'
const ProfileHook = () => {

  const dispatch=useDispatch()

  const navigate=useNavigate()

  let user
    if (localStorage.getItem("user")!== null)
      user = JSON.parse(localStorage.getItem("user")) 

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  const [name,setName]= useState(user.name)
  const [email,setEmail]= useState(user.email)
  const [phone,setPhone]= useState(user.phone)


  const [loading,setLoading]= useState(true)

  const onChangeName=(event)=>{
    event.persist()
    setName(event.target.value)
  }
  const onChangeEmail=(event)=>{
    event.persist()
    setEmail(event.target.value)
  }
  const onChangePhone=(event)=>{
    event.persist()
    setPhone(event.target.value)
  }


  
    
    const handleSubmit=async()=>{

        let body
    if(user.email===email){
      body={
        name,
        phone
      }
    }else{
      body={
        name,
        email,
        phone
      }
    }
      setLoading(true)
      await dispatch(updateUserProfileData(body))
      setLoading(false)
      setShow(false)
      
}

const res=useSelector(state=>state.authReducer.userProfile)

    useEffect(()=>{
        if(loading===false){
          if(res&&res.status===200){
            notify("updated successfuly","success")
            localStorage.setItem("user",JSON.stringify(res.data.data.user))
            setTimeout(() => {
              window.location.reload(false)
            }, 1000);
          }else{
            notify("updated error","error")
          }
        }
    },[loading])

 
    
  const [oldPassword,setOldPassword]= useState("")
  const [newPassword,setNewPassword]= useState("")
  const [confirmNewPassword,setConfirmNewPassword]= useState("")
  const [loadingPass,setLoadingPass]= useState(true)


  const onChangeOldPassword=(event)=>{
    event.persist()
    setOldPassword(event.target.value)
  }
  const onChangeNewPassword=(event)=>{
    event.persist()
    setNewPassword(event.target.value)
  }
  const onChangeConfirmPassword=(event)=>{
    event.persist()
    setConfirmNewPassword(event.target.value)
  }

    const changePassword=async()=>{
      setLoadingPass(true)
      await dispatch(updateUserPassword({
        currentPassword:oldPassword,
        password:newPassword,
        passwordConfirm:confirmNewPassword
      }))
      setLoadingPass(false)
    }

    const resPass=useSelector(state=>state.authReducer.userChangePassword)

    useEffect(()=>{
        if(loadingPass===false){
          if(resPass&&resPass.status===200){
            notify("updated successfuly","success")
            setTimeout(() => {
              localStorage.removeItem("token")
              localStorage.removeItem("user")
              navigate("/login")
            }, 1500);
          }else{
            notify("updated error","error")
          }
        }
    },[loadingPass])









return[user,show,handleClose,handleShow,handleSubmit,name,email,phone,onChangeEmail,onChangeName,
  onChangePhone,changePassword,oldPassword,newPassword,confirmNewPassword,onChangeNewPassword,onChangeConfirmPassword,onChangeOldPassword]
}
export default ProfileHook
