import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getallProducts } from '../../redux/action/productAction';

const ViewHomeProductHook = () => {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getallProducts())
  },[])

  const allproducts = useSelector((state)=> state.allProducts.allproducts)
  
  let items = [];
  

  if(allproducts.data){
    items = allproducts.data.slice(0,4)
    // console.log(allproducts.data)
  }else 
    items= []

  

  return[items]
}

export default ViewHomeProductHook
