import {CREATE_SUB_CATEGORY,GET_ERROR, GET_SUB_CATEGORY} from "../type"
import { useInsertData} from "../../hooks/useInsertData"
import { useGetData } from "../../hooks/useGetData"



export const creatSubCategory =(data)=> async(dispatch) => {
  try{
  
    const response = await useInsertData(`/api/v1/subcategories`, data)
    dispatch({
      type: CREATE_SUB_CATEGORY,
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

// get subcategory depend in cat id
export const getOneCategory =(id)=> async(dispatch) => {
  try{
  
    const response = await useGetData(`/api/v1/categories/${id}/subcategories`)
    dispatch({
      type: GET_SUB_CATEGORY,
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