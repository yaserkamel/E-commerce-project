import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import notify from '../useNotification';
import { creatCategory, getAllCategory } from '../../redux/action/categoryAction';
import avatar from '../../images/avatar.png'


export const AddCategoryHook = () => {
    const dispatch = useDispatch();

    const [img,setImg]=useState(avatar)
    const [name,setName]=useState('')
    const [selectedFile, setSelectedFile]=useState(null)
    const [loading, setLoading]=useState(true)
    const [isPress, setIsPress]=useState(false)
    const [loadingData, setLoadingData]= useState(true)

    const res = useSelector(state=>state.allCategory.category )
    console.log(res)

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
            notify("please enter the all inputs","warn")
            return;
    }

    const formData = new FormData();
    formData.append("name" , name)
    formData.append("image" , selectedFile)

    

    setLoading(true)
    setIsPress(true)
    await dispatch(creatCategory(formData))
    setLoading(false)
    }

    useEffect(()=>{
        if(loading === false) {
            setImg(avatar)
            setName('')
            setSelectedFile(null)
            setLoading(true)
            setTimeout(()=> setIsPress(false), 1000)

            if(res && res.status === 201){
                notify("Added successfully","success");
                setTimeout(()=> window.location.reload(false), 1500) 
                
            }else
                notify("Add failed","error")
        }
    },[loading])

    useEffect(()=>{
        const get=async()=>{
            setLoadingData(true)
            await dispatch(getAllCategory())
            setLoadingData(false)
        }
        get()
    },[])

    let result=[]
    try{
        if(res.data)
            result = res.data
    }catch(e){}


    return [img,name,loading,isPress,handleSubmit,onImageChange,onChangeName, result, loadingData]
}
