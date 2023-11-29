import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getallProducts } from '../../redux/action/productAction';

const ViewHomeProductHook = () => {
  const dispatch = useDispatch();

  const getProducts = async ()=>{
    try{
      await dispatch(getallProducts())
    }catch(error){
      console.log(error)
    }
  }
  
  useEffect(()=>{
    // dispatch(getallProducts())
    getProducts();
  },[])

  const allproducts = useSelector((state)=> state.allProducts.allproducts)
  
  let items = [];
    try {
      if (allproducts.data)
        items = allproducts.data.slice(0, 4);
      else
        items = []
    } catch (e) { }

  return[items]
}

export default ViewHomeProductHook
