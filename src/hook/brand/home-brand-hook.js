import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand } from '../../redux/action/brandAction';


const HoomBrandHook = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllBrand());
  },[])
 
  const brand = useSelector(state => state.allBrand.brand)
  const loading = useSelector(state => state.allBrand.loading)
  console.log(brand.data)
  console.log(loading)

  return[brand,loading]
}

export default HoomBrandHook;