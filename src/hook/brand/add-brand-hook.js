import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../useNotification';
import avatar from '../../images/avatar.png'
import { creatBrand } from '../../redux/action/brandAction';


export const AddBrandHook = () => {
    const dispatch = useDispatch();

    const [img,setImg]=useState(avatar)
    const [name,setName]=useState('')
    const [selectedFile, setSelectedFile]=useState(null)
    const [loading, setLoading]=useState(true)
    const [isPress, setIsPress]=useState(false)

    const res = useSelector(state=>state.allBrand.brand )

    const onChangeName=(e)=>{
        e.persist()
        setName(e.target.value)
    }
    const onImageChange=(event)=>{
        if(event.target.files &&  event.target.files[0])
        {
            setImg(URL.createObjectURL(event.target.files[0]))
            setSelectedFile(event.target.files[0])
        }
    }
    const handleSubmit= async(event)=>{
        event.preventDefault();
        if(name==="" || selectedFile===null)
        {
            notify("Please Fill Data","warn")
            return;
    }




    const formData = new FormData();
    formData.append("name" , name)
    formData.append("image" , selectedFile)

    setLoading(true)
    setIsPress(true)
    await dispatch(creatBrand(formData))
    setLoading(false)
  }

    useEffect(()=>{
        if(loading === false) {
            setImg(avatar)
            setName('')
            setSelectedFile(null)
            console.log('end')
            setLoading(true)
            setTimeout(()=> setIsPress(false), 1000)

            if(res.status === 201)
                notify("Added successfully","success"); 
            else
                notify("Added failed","error")
        }
    },[loading])

    return [img,name,loading,isPress,handleSubmit,onImageChange,onChangeName]
}
