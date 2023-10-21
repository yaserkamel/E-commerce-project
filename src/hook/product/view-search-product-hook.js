import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsSearch } from '../../redux/action/productAction';
import checkInternet from '../checkInternet';

const ViewSearchProductsHook = () => {
    const dispatch = useDispatch();
    let limit =8;

    const getProduct =async()=>{
      getStorage()
      sortData()
      await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&keyword=${word}
      &${queryCat}&${brandCat}${priceFromString}${priceToString}`))
    }

    useEffect(()=>{
        checkInternet()
        getProduct()
      
    },[])

    const allproducts = useSelector((state)=> state.allProducts.allproducts)
    // console.log(allproducts)
    
    let items = [];
    let pagination = [];
    let results = 0;
    try{
      if(allproducts.data ){
        items = allproducts.data
      }else
        items= []
    }catch(e){}

    try{
      if(allproducts.paginationResult){
        pagination = allproducts.paginationResult.numberOfPages
      }else
        pagination= []
    }catch(e){}

    try{
      if(allproducts.results){
        results = allproducts.results
      }else
      results = 0;
    }catch(e){}

    let word = "", queryCat= "", brandCat="", priceFrom = "", priceTo = "";
    let priceFromString = '', priceToString = ''
    const getStorage = () =>{
      if(localStorage.getItem('searchWord')!= null)
        word = localStorage.getItem('searchWord')
      if(localStorage.getItem('catChecked')!= null)
        queryCat = localStorage.getItem('catChecked')
      if(localStorage.getItem('brandChecked')!= null)
        brandCat = localStorage.getItem('brandChecked')
      if(localStorage.getItem('priceFrom')!= null)
        priceFrom = localStorage.getItem('priceFrom')
      if(localStorage.getItem('priceTo')!= null)
        priceTo = localStorage.getItem('priceTo')

      if(priceFrom === '' || priceFrom <=0) {
        priceFromString = ''
      }else {
        priceFromString = `&price[gt]=${priceFrom}`
      }

      if(priceTo === '' || priceTo <=0) {
        priceToString = ''
      }else {
        priceToString = `&price[lte]=${priceTo}`
      }

    }
    const onPress=async(page)=>{
      getStorage();
      sortData();
      await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&page=${page}&keyword=${word}
      &${queryCat}&${brandCat}${priceFromString}${priceToString}`))
    }

    let sortType="",sort=""
    const sortData= () => {
      if(localStorage.getItem("sortType") != null)
        sortType = localStorage.getItem("sortType")
      else
        sortType = ""

      if(sortType==="Price From Low To High")
        sort="+price"

      else if(sortType==="Price From High To Low")
        sort="-price"
      
      else if(sortType==="More Sale")
        sort="-sold"

      else if(sortType==="More Rated")
        sort="-quantity"

      else
        sort=""
    }



  return [items, pagination, onPress, getProduct, results]
}

export default ViewSearchProductsHook
