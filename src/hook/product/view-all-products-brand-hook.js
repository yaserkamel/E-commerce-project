import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getallProductsByBrand } from '../../redux/action/productAction';

const ViewAllProductsBrandHook = (brandID) => {
  const dispatch = useDispatch();
  let limit =8;

  const getProduct =async()=>{
    await dispatch(getallProductsByBrand('',limit,brandID))
  }

  useEffect(()=>{
    getProduct()
  },[])

  const onPress=async(page)=>{
    await dispatch(getallProductsByBrand(page,limit,brandID))
  }
  const allBrand = useSelector((state)=> state.allProducts.allproductsBrand)
  // console.log(allproducts)
  
  let items = [];
  let pagination = [];
  try{
    if(allBrand.data ){
      items = allBrand.data
    }else
      items= []
  }catch(e){}

  try{
    if(allBrand.paginationResult){
      pagination = allBrand.paginationResult.numberOfPages
    }else
      pagination= []
  }catch(e){}

  return [items,pagination,onPress]
}

export default ViewAllProductsBrandHook
