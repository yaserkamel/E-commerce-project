import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/action/categoryAction';

export const HoomCategoryHook = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllCategory());
  },[])
 
  const category = useSelector(state => state.allCategory.category)
  const loading = useSelector(state => state.allCategory.loading)
  console.log(category.data)
  console.log(loading)

  const colors = ["#FFD3E8", "#F4DBA5" , "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]
  return[category,loading,colors]
}
