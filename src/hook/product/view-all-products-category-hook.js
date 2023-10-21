import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getallProductsByCategory } from '../../redux/action/productAction';

const ViewAllProductsCategoryHook = (catId) => {
  const dispatch = useDispatch();
  let limit =8;

  const getProduct =async()=>{
    await dispatch(getallProductsByCategory('',limit,catId))
  }

  useEffect(()=>{
    getProduct()
  },[])

  const onPress=async(page)=>{
    await dispatch(getallProductsByCategory(page,limit,catId))
  }
  const allproducts = useSelector((state)=> state.allProducts.allproductsCategory)
  // console.log(allproducts)
  
  let items = [];
  let pagination = [];
  try{
    if(allproducts.data ){
      items = allproducts.data
    }else
      items= []
  }catch(e){}

  try{
    if(allproducts.paginationResult){
      pagination = allproducts.paginationResult.numberOfPages
    }else
      pagination= []
  }catch(e){}

  return [items,pagination,onPress]

}

export default ViewAllProductsCategoryHook
