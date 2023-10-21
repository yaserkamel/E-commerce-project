import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/action/categoryAction';
import { getAllBrand } from '../../redux/action/brandAction';
import { useState } from 'react';
import ViewSearchProductsHook from '../product/view-search-product-hook';

const SidebarSearchHook = () => {
  const [items, pagination, onPress, getProduct, results] = ViewSearchProductsHook();

  const dispatch = useDispatch();

  useEffect(()=>{
    const get = async() =>{
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    }
    get();
  },[]) 
 
  const allCat = useSelector(state => state.allCategory.category)
  const allBrand = useSelector(state => state.allBrand.brand)

  let category = [];
  if(allCat.data)
    category = allCat.data

  let brand = [];
  if(allCat.data)
    brand = allBrand.data

  var queryCat = '' , queryBrand ='';
  const [catChecked,  setCatChecked] =  useState([]);
  const clickCategory = (e)=> {
    let value = e.target.value
    if(value === '0'){
      setCatChecked([])
    }else {
      if(e.target.checked === true) {
        setCatChecked([...catChecked, value])
      }else if (e.target.checked === false) {
        const newArr = catChecked.filter((e) => e !== value) 
        setCatChecked(newArr)
      }
    }
    
  }
  useEffect(() => {
    queryCat = catChecked.map(val => "category[in][]=" + val).join("&")
    localStorage.setItem("catChecked", queryCat)
    console.log(queryCat)
    setTimeout(()=>{
      getProduct()
    }, 1000)
  }, [catChecked])
  


  const [brandChecked,  setBrandChecked] =  useState([]);
  const clickBrand = (e)=> {
    let value = e.target.value
    if(value === '0'){
      setBrandChecked([])
    }else {
      if(e.target.checked === true) {
        setBrandChecked([...brandChecked, value])
      }else if (e.target.checked === false) {
        const newArr = brandChecked.filter((e) => e !== value) 
        setBrandChecked(newArr)
      }
    }
  }
  useEffect(() => {
    queryBrand = brandChecked.map(val => "brand[in][]=" + val).join("&")
    localStorage.setItem("brandChecked", queryBrand)
    console.log(queryBrand)
    setTimeout(()=>{
      getProduct()
    }, 1000)
  }, [brandChecked])
  

  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(0)

  const priceFrom = (e) => {
    localStorage.setItem('priceFrom', e.target.value)
    setFrom(e.target.value)
  }
  const priceTo = (e) => {
    localStorage.setItem('priceTo', e.target.value)
    setTo(e.target.value)
  }

  useEffect(()=>{
    setTimeout(()=>{
      getProduct()
    }, 1000)
  },[from,to])


  return [category, brand, clickCategory, clickBrand, priceFrom, priceTo]

}

export default SidebarSearchHook
