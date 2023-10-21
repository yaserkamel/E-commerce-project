import {UPDATE_PRODUCT,CREATE_PRODUCT,GET_ERROR,GET_ALL_PRODUCT,GET_PRODUCT_DETAILS,GET_PRODUCT_LIKE,
        DELETE_PRODUCTS,GET_ALL_PRODUCT_CATEGORY,GET_ALL_PRODUCT_BRAND } from "../type"
import useDeleteData from "../../hooks/useDeleteData"
import { useGetData } from "../../hooks/useGetData"
import { useInsertDataWithImage } from "../../hooks/useInsertData"
import { useUpdateDataWithImage } from "../../hooks/useUpdatData"


export const creatProduct =(formData)=> async(dispatch) => {
  try{
  
    const response = await useInsertDataWithImage(`/api/v1/products`, formData)
    dispatch({
      type: CREATE_PRODUCT,
      payload:  response,
      loading: true
    })
  }catch(e){
    dispatch({
      type: GET_ERROR,
      payload: "Error"+ e,
    })
  }
}


export const getallProducts =(limit)=> async(dispatch) => {
  try{
  
    const response = await useGetData(`/api/v1/products?limit=${limit}`)
    dispatch({
      type: GET_ALL_PRODUCT,
      payload:  response,
      loading: true
    })
  }catch(e){
    dispatch({
      type: GET_ERROR,
      payload: "Error"+ e,
    })
  }
}


export const getallProductsByCategory =(page,limit,categoryID)=> async(dispatch) => {
  try{
  
    const response = await useGetData(`/api/v1/products?limit=${limit}&page=${page}&category=${categoryID}`)
    dispatch({
      type: GET_ALL_PRODUCT_CATEGORY,
      payload:  response,
      loading: true
    })
  }catch(e){
    dispatch({
      type: GET_ALL_PRODUCT_CATEGORY,
      payload:  e.response,
    })
  }
}
export const getallProductsByBrand =(page,limit,brandID)=> async(dispatch) => {
  try{
  
    const response = await useGetData(`/api/v1/products?limit=${limit}&page=${page}&brand=${brandID}`)
    dispatch({
      type: GET_ALL_PRODUCT_BRAND,
      payload:  response,
      loading: true
    })
  }catch(e){
    dispatch({
      type: GET_ALL_PRODUCT_BRAND,
      payload:  e.response,
    })
  }
}

export const getAllProductsPage =(page,limit)=> async(dispatch) => {
  try{
  
    const response = await useGetData(`/api/v1/products?page=${page}&limit=${limit}`)
    dispatch({
      type: GET_ALL_PRODUCT,
      payload:  response,
      loading: true
    })
    }catch(e){
      dispatch({
        type: GET_ERROR,
        payload: "Error"+ e,
      })
    }
}

export const getAllProductsSearch =(queryString)=> async(dispatch) => {
  try{
  
    const response = await useGetData(`/api/v1/products?${queryString}`)
    dispatch({
      type: GET_ALL_PRODUCT,
      payload:  response,
      loading: true
    })
    }catch(e){
      dispatch({
        type: GET_ERROR,
        payload: "Error"+ e,
      })
    }
}

export const getOneProduct =(id) => async (dispatch) => {
  try{
  
    const response = await useGetData(`/api/v1/products/${id}`)
    dispatch({
      type: GET_PRODUCT_DETAILS,
      payload:  response,
      loading: true
    })
  }catch(e){
    dispatch({
      type: GET_ERROR,
      payload: "Error"+ e,
    })
  }
}



export const getProductLike =(id) => async (dispatch) => {
  try{
  
    const response = await useGetData(`/api/v1/products?category=${id}`)
    dispatch({
      type: GET_PRODUCT_LIKE,
      payload:  response,
      loading: true
    })
  }catch(e){
    dispatch({
      type: GET_ERROR,
      payload: "Error"+ e,
    })
  }
}


export const deleteProducts =(id) => async (dispatch) => {
  try{
  
    const response = await useDeleteData(`/api/v1/products/${id}`)
    console.log(response)
    dispatch({
      type: DELETE_PRODUCTS,
      payload:  response,
      loading: true
    })
  }catch(e){
    dispatch({
      type: GET_ERROR,
      payload: "Error"+ e,
    })
  }

}
export const updateProducts =(id,data) => async (dispatch) => {
  try{
  
    const response = await useUpdateDataWithImage(`/api/v1/products/${id}`, data)
    dispatch({
      type: UPDATE_PRODUCT,
      payload:  response,
      loading: true
    })
  }catch(e){
    dispatch({
      type: GET_ERROR,
      payload: "Error"+ e,
    })
  }
}
