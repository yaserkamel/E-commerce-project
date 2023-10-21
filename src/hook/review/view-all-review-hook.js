import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import notify from '../useNotification';
import { allReviewProduct } from '../../redux/action/reviewAction';



export const ViewAllReviewHook = (id) => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)
  const allReview = useSelector(state => state.reviewReducer.allReviewProduct)

  if(allReview){
    console.log(allReview)
  }

  useEffect(()=>{
    setLoading(true)
    dispatch(allReviewProduct(id, 1, 5))
    setLoading(false)
  },[])

  const onPress = async(page)=>{
    await  dispatch(allReviewProduct(id, page, 5))
  }
  return [allReview, onPress];
}
