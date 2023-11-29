import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCategory } from '../../redux/action/categoryAction';

const CategoryCardHook = (category) => {

  const dispatch = useDispatch()


  const formatDate = (dateString)=>{
    const options = {year: 'numeric' , month: 'numeric' , day: 'numeric'};
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    const handleDelete=async()=>{
        await dispatch(deleteCategory(category._id))
        setShow(false)
        window.location.reload(false)
    }
    return [formatDate, show, handleShow, handleClose, handleDelete]
}

export default CategoryCardHook
