import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editUserAdress, getOneUserAdress } from '../../redux/action/userAdressAction';
import { useNavigate } from 'react-router-dom';
import notify from "../useNotification"


const EditAddressHook = (id) => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);
  const [loadingEdit, setLoadingEdit] = useState(true);


  const [alias,setAlias]= useState('')
  const [details,setDetails]= useState('')
  const [phone,setPhone]= useState('')
  

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
  
    const handleEdit=async()=>{
      setLoadingEdit(true)
        await dispatch(editUserAdress(id,{
          alias:alias,
          details:details,
          phone:phone
        }))
        setLoadingEdit(false)
    }

    useEffect(()=>{
      const get=async()=>{
        setLoading(true)
        await dispatch(getOneUserAdress(id))
        setLoading(false)
      }
      get()
    },[])

    const res=useSelector(state=> state.userAdressReducer.oneAddress)
    useEffect(()=>{
      if(loading===false){
        if(res && res.status==="success"){
          setAlias(res.data.alias)
          setDetails(res.data.details)
          setPhone(res.data.phone)
        }
      }
    },[loading])

    const resEdit=useSelector(state=> state.userAdressReducer.editAddress)


    useEffect(()=>{
      if(loadingEdit===false)
        if(resEdit && resEdit.status===200){
          notify("update successfuly","success")
          setTimeout(() => {
            navigate("/user/addresses")
          }, 1000);
        }else{
          notify("update error","error")
        }
    },[loadingEdit])



  return [handleEdit,alias,details,phone,onChangeAlias,onChangeDetails,onChangePhone]
}

export default EditAddressHook
