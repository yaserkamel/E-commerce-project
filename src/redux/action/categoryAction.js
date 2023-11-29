import {CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ONE_CATEGORY,DELETE_CATEGORY,EDIT_CATEGORY,GET_ERROR} from "../type"
import { useGetData } from "../../hooks/useGetData"
import { useInsertDataWithImage } from "../../hooks/useInsertData"
import useDeleteData from "../../hooks/useDeleteData"
import { useUpdateData, useUpdateDataWithImage } from "../../hooks/useUpdatData"


export const getAllCategory =(limit)=> async(dispatch) => {
  try{
  
    const response = await useGetData(`/api/v1/categories?limit=${limit}`)
    // console.log(response.data)
    dispatch({
      type: GET_ALL_CATEGORY,
      payload:  response,
    })
  }catch(e){
    dispatch({
      type: GET_ERROR,
      payload: "Error"+ e,
    })
  }
}

export const getOneCategory =(id)=> async(dispatch) => {
  try{
  
    const response = await useGetData(`/api/v1/categories/${id}`)
    // console.log(response.data)
    dispatch({
      type: GET_ONE_CATEGORY,
      payload:  response,
    })
  }catch(e){
    dispatch({
      type: GET_ERROR,
      payload: "Error"+ e,
    })
  }
}




export const getAllCategoryPage =(page)=> async(dispatch) => {
  try{
  
    const response = await useGetData(`/api/v1/categories?limit=3&page=${page}`)
    // console.log(response.data)
    dispatch({
      type: GET_ALL_CATEGORY,
      payload:  response,
    })
  }catch(e){
    dispatch({
      type: GET_ERROR,
      payload: "Error"+ e,
    })
  }
}



export const creatCategory =(formData)=> async(dispatch) => {
  try{
  
    const response = await useInsertDataWithImage(`/api/v1/categories`, formData)
    dispatch({
      type: CREATE_CATEGORY,
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

export const deleteCategory =(id)=> async(dispatch) => {
  try{
  
    const response = await useDeleteData(`/api/v1/categories/${id}`)
    dispatch({
      type: DELETE_CATEGORY,
      payload:  response,
    })
  }catch(e){
    dispatch({
      type: DELETE_CATEGORY,
      payload: e.response,
    })
  }
}

export const editCategory =(id,body)=> async(dispatch) => {
  try{
  
    const response = await useUpdateDataWithImage(`/api/v1/categories/${id}`,body)
    dispatch({
      type: EDIT_CATEGORY,
      payload:  response,
    })
  }catch(e){
    dispatch({
      type: EDIT_CATEGORY,
      payload: e.response,
    })
  }
}