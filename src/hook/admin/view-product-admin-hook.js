import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsPage, getallProducts } from '../../redux/action/productAction';


const ViewProductAdminHook = (id) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getallProducts(12))
  },[])

  const onPress = async (page)=>{
    await dispatch(getAllProductsPage(page, 12))
  }
  const allproducts = useSelector((state)=> state.allProducts.allproducts)
  // console.log(allproducts)

  let items = [];
  let pagination = [];

  try{
    if(allproducts.data ){
      items = allproducts.data
    }else
      items= []

    if(allproducts.paginationResult ){
      pagination = allproducts.paginationResult.numberOfPages
    }else
      pagination= []
  }catch(e){}
  
  return[items , pagination, onPress]
}

export default ViewProductAdminHook
