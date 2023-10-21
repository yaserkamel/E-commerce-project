import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand, getAllBrandPage } from '../../redux/action/brandAction';

export const AllBrandPageHook = () => {
 
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllBrand(4));
  },[]) 
 
  const brand = useSelector(state => state.allBrand.brand)
  const loading = useSelector(state => state.allBrand.loading)
  console.log(brand.data)
  console.log(loading)

  let pageCount=0;
  if(brand.paginationResult)
    pageCount=brand.paginationResult.numberOfPages

    const getPage = (page)=> {
      dispatch(getAllBrandPage(page));
      console.log(page)
    }

    return[brand,loading,pageCount,getPage]
}
