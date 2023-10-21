import { ADD_USER_ADRESS, ALL_USER_ADRESS, DELETE_USER_ADRESS ,ONE_USER_ADRESS,EDIT_USER_ADRESS } from "../type"
import { useInsertData } from "../../hooks/useInsertData"
import { useGetDataToken } from "../../hooks/useGetData"
import useDeleteData from "../../hooks/useDeleteData"
import { useUpdateData } from "../../hooks/useUpdatData"



export const addUserAdress =(formData)=> async(dispatch) => {
  try{
  
    const response = await useInsertData(`/api/v1/addresses`, formData)
    dispatch({
      type: ADD_USER_ADRESS,
      payload:  response,
      loading: true
    })
  }catch(e){
    dispatch({
      type: ADD_USER_ADRESS,
      payload:  e.response,
    })
  }
}


export const getAllUserAdress =()=> async(dispatch) => {
  try{
  
    const response = await useGetDataToken(`/api/v1/addresses`)
    dispatch({
      type: ALL_USER_ADRESS,
      payload:  response,
      loading: true
    })
  }catch(e){
    dispatch({
      type: ALL_USER_ADRESS,
      payload:  e.response,
    })
  }
}

export const deleteUserAdress =(id)=> async(dispatch) => {
  try{
  
    const response = await useDeleteData(`/api/v1/addresses/${id}`)
    dispatch({
      type: DELETE_USER_ADRESS,
      payload:  response,
      loading: true
    })
  }catch(e){
    dispatch({
      type: DELETE_USER_ADRESS,
      payload:  e.response,
    })
  }
}


export const getOneUserAdress =(id)=> async(dispatch) => {
  try{
  
    const response = await useGetDataToken(`/api/v1/addresses/${id}`)
    dispatch({
      type: ONE_USER_ADRESS,
      payload:  response,
      loading: true
    })
  }catch(e){
    dispatch({
      type: ONE_USER_ADRESS,
      payload:  e.response,
    })
  }
}

export const editUserAdress =(id,body)=> async(dispatch) => {
  try{
  
    const response = await useUpdateData(`/api/v1/addresses/${id}`,body)
    dispatch({
      type: EDIT_USER_ADRESS,
      payload:  response,
      loading: true
    })
  }catch(e){
    dispatch({
      type: EDIT_USER_ADRESS,
      payload:  e.response,
    })
  }
}