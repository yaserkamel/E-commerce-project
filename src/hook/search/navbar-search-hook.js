import React, { useEffect, useState } from 'react'
import ViewSearchProductsHook from '../product/view-search-product-hook'

export const NavbarSearchHook = () => {

   const [items,pagination,onPress,getProduct] = ViewSearchProductsHook()
   const [searchWord,setSearchWord] = useState('')

   const onChangeSearch=(e)=>{
      localStorage.setItem('searchWord', e.target.value)
      setSearchWord(e.target.value)

      const path = window.location.pathname
      if(path != "/products"){
         window.location.href= '/products'
      }
   }

   useEffect(()=>{
      setTimeout(() => {
         getProduct(searchWord)
      },1000);
   },[searchWord])


   return [onChangeSearch , searchWord]
}
