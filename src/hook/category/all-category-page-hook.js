import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getAllCategoryPage } from '../../redux/action/categoryAction';

export const AllCategoryPageHook = () => {
 
  const dispatch = useDispatch();

  useEffect(()=>{
    const get=async()=>{
      await dispatch(getAllCategory(3));
    }
    get()
  },[]) 
 
  const category = useSelector(state => state.allCategory.category)
  const loading = useSelector(state => state.allCategory.loading)
  console.log(category)
  // console.log(loading)

  let pageCount=0;
  try{
  if(category.paginationResult)
    pageCount=category.paginationResult.numberOfPages
  }catch(e){}
    const getPage = (page)=> {
      dispatch(getAllCategoryPage(page));
      console.log(page)
    }

    return[category,loading,pageCount,getPage]
}
