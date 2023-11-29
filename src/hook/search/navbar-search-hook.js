import React, { useEffect, useState } from 'react'
import ViewSearchProductsHook from '../product/view-search-product-hook'

export const NavbarSearchHook = () => {

   const [ , , ,getProduct] = ViewSearchProductsHook()
   const [searchWord,setSearchWord] = useState('')

   const onChangeSearch=(e)=>{
      localStorage.setItem('searchWord', e.target.value)
      setSearchWord(e.target.value)

      const path = window.location.pathname
      if(path !== "/products"){
         window.location.href= '/products'
      }
   }
   useEffect(() => {
      //Runs only on the first render
      if(localStorage.getItem('searchWord')!= null)
      setSearchWord( localStorage.getItem('searchWord'))
   }, []);

   useEffect(()=>{
      //Runs on the first render
      //And any time any dependency value changes
      setTimeout(() => {
         getProduct(searchWord)
      },1000);
   },[searchWord])


   return [onChangeSearch , searchWord]
}
