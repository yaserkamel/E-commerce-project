import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import notify from '../useNotification';
import { useNavigate } from 'react-router-dom';
import { editCategory, getOneCategory } from '../../redux/action/categoryAction';
import avatar from '../../images/avatar.png'

const EditCategoryHook = (id) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [categoryName,setCategoryName]= useState('')
  const [categoryImg,setCategoryImg]= useState(avatar)
  const [selectedFile, setSelectedFile]=useState(null)
  
  const [loading,setLoading]= useState(true)
  const [loadingData,setLoadingData]= useState(true)


  const res = useSelector(state => state.allCategory.oneCategory)
  console.log(res)

  useEffect(()=>{
    const get=async()=>{
      setLoadingData(true)
      await dispatch(getOneCategory(id))
      setLoadingData(false)
    }
    get()
  },[])

  useEffect(()=>{
    if(loadingData === false){
      if(res.data){
        setCategoryName(res.data.name)
        setCategoryImg(res.data.image)
        console.log(res.data.image)
        setSelectedFile(res.data.image)
        console.log(selectedFile)
      }
    }

  }, [loadingData])

  const onChangeName=(event)=>{
    event.persist()
    setCategoryName(event.target.value)
  }
  const onChangeImg=(event)=>{
    if(event.target.files &&  event.target.files[0])
    {
        setCategoryImg(URL.createObjectURL(event.target.files[0]))
        setSelectedFile(event.target.files[0])
        // console.log(selectedFile)
    }
  }
  
  const onSubmit=async()=>{
    if(categoryName==="" || selectedFile === null){
      notify("please enter the all inputs","warn")
      return;
    }

    console.log(selectedFile)

    const formData = new FormData();
    formData.append("name" , categoryName)
    formData.append("image" , selectedFile)

    setLoading(true)
    await dispatch(editCategory(id,formData))
    setLoading(false)
  }

  const resEditCategory = useSelector(state=> state.allCategory.editCategory)
  console.log(resEditCategory)

  useEffect(()=>{
    if(loading===false){
      
      if(resEditCategory && resEditCategory.status === 200){
        notify("Edite Successfuly","success")
        // setTimeout(() => {
        //   navigate("/admin/addcategory")
        // }, 1000);
      }else{
        notify("Edite Failed","error")
      }
    }
  },[loading])




  return [categoryName,categoryImg,onChangeName,onChangeImg,onSubmit]
}

export default EditCategoryHook
