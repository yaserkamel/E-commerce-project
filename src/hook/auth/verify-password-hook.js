import React , { useState, useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from '../useNotification';
import { verifyPassword } from '../../redux/action/authAction';


const VerifyPasswordHook = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(true);

  const onChangeCode = (e) => {
    setCode(e.target.value)
  }
  const onSubmit = async () => {
    if(code === "" ){
      notify("Please Enter Code" , "error")
      return;
    }

    setLoading(true)
    await dispatch(verifyPassword(
      { resetCode : code }
    ))
    setLoading(false)
    console.log(loading)
  }

  const res  =useSelector(state => state.authReducer.verifyPassword )
  useEffect(()=>{
    if(loading===false){
      if(res){
        if(res.data.status === "Success"){
          notify("The code is correct", "success")
          setTimeout(()=>{
            navigate('/user/reset-password')
          }, 1000)
        }
        if(res.data.status === "fail"){
          notify("The code is incorrect or has expired", "error")
        }
        if(res.data.status === "error"){
          notify("There was an error sending the email. Try again later!", "error")
        }
      }
    }
  },[loading])
  return [onSubmit,onChangeCode, code, loading]
}

export default VerifyPasswordHook
