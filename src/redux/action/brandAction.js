import { CREATE_BRAND, GET_ALL_BRAND,GET_ONE_BRAND,  GET_ERROR} from "../type"
import { useGetData } from "../../hooks/useGetData"
import { useInsertDataWithImage } from "../../hooks/useInsertData"


export const getAllBrand =(limit)=> async(dispatch) => {
  try{
  
    const response = await useGetData(`/api/v1/brands?limit=${limit}`)
    // console.log(response.data)
    dispatch({
      type: GET_ALL_BRAND,
      payload:  response,
    })
  }catch(e){
    dispatch({
      type: GET_ERROR,
      payload: "Error"+ e,
    })
  }
}

export const getOneBrand =(id)=> async(dispatch) => {
  try{
  
    const response = await useGetData(`/api/v1/brands/${id}`)
    // console.log(response.data)
    dispatch({
      type: GET_ONE_BRAND,
      payload:  response,
    })
  }catch(e){
    dispatch({
      type: GET_ERROR,
      payload: "Error"+ e,
    })
  }
}



export const getAllBrandPage =(page)=> async(dispatch) => {
  try{
  
    const response = await useGetData(`/api/v1/brands?limit=4&page=${page}`)
    // console.log(response.data)
    dispatch({
      type: GET_ALL_BRAND,
      payload:  response,
    })
  }catch(e){
    dispatch({
      type: GET_ERROR,
      payload: "Error"+ e,
    })
  }
}

export const creatBrand =(formData)=> async(dispatch) => {
  try{
  
    const response = await useInsertDataWithImage(`/api/v1/brands`, formData)
    dispatch({
      type: CREATE_BRAND,
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