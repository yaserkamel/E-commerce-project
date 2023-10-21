import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { json, useNavigate } from 'react-router-dom';
import notify from '../useNotification';
import { deleteReview } from '../../redux/action/reviewAction';
import { useEffect } from 'react';

export const DeleteReviewHook = (review) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const [isUser, setIsUser] = useState(false)
  
  const [loading, setLoading] = useState(true)


    const [showDelete, setShowDelete] = useState(false);

    const handleClose = () => setShowDelete(false);
    const handleShow = () => setShowDelete(true);

  let user = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    try {
        if (review.user._id === user._id) {
            setIsUser(true);
        }
    } catch (e) { }
}, [])



  const handleDelete=async()=>{
        setLoading(true)
        await dispatch(deleteReview(review._id))
        setLoading(false)
        handleClose()
        
  }

  const res = useSelector(state => state.reviewReducer.deleteReview)
  useEffect(()=>{
    if(loading===false){
      if(res===""){
        notify("Deleted","success")
        setTimeout(() => {
          window.location.reload(false)
        }, 1000);
      }
      else{
        notify("there is problem", "error")
      }
      console.log(res)
    }
  },[loading])
  

  return [isUser,handleShow,handleClose,handleDelete,showDelete]
}
