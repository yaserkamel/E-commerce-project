import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct, getProductLike } from '../../redux/action/productAction';
import mobile from '../../images/mobile.png'
import { getOneCategory } from '../../redux/action/categoryAction';
import { getOneBrand } from '../../redux/action/brandAction';

const ViewProductDetailsHook = (id) => {
  
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getOneProduct(id))
    },[])

    const oneProduct = useSelector((state)=> state.allProducts.oneProduct)
    const oneCategory = useSelector((state)=> state.allCategory.oneCategory)
    const oneBrand = useSelector((state)=> state.allBrand.oneBrand)
    const productLike = useSelector((state)=> state.allProducts.productLike)

    let item = [];
    if(oneProduct.data){
      item = oneProduct.data
    }else 
      item= []

    useEffect(()=>{
      if(item.category)
        dispatch(getOneCategory(item.category))
      if(item.brand)
        dispatch(getOneBrand(item.brand))
      if(item.category)
        dispatch(getProductLike(item.category))

    },[item])

    let images = []
    if(item.images){
      images = item.images.map((img) => {return { original: img }})
    }else{
      images = [{original: `${mobile}`,}]
    } 

      
    let cat = [];
    if(oneCategory.data){
      cat = oneCategory.data
    }else 
      cat= []

    let brand = [];
    if(oneBrand.data){
      brand = oneBrand.data
    }else 
    brand= []

    let prod;
    if(productLike){
      prod=productLike.data
      // console.log(prod)
    }else
      prod=[]
  
    return[item, images, cat, brand , prod]
}

export default ViewProductDetailsHook
