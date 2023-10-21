import { ADD_TO_WISH_LIST, REMOVE_FROM_WISH_LIST, USER_WISH_LIST } from "../type"
import { useInsertData } from "../../hooks/useInsertData"
import useDeleteData from "../../hooks/useDeleteData"
import { useGetDataToken } from "../../hooks/useGetData"


export const addProductToWishList =(formData)=> async(dispatch) => {
  try{
  
    const response = await useInsertData(`/api/v1/wishlist`, formData)
    dispatch({
      type: ADD_TO_WISH_LIST,
      payload:  response,
      loading: true
    })
  }catch(e){
    dispatch({
      type: ADD_TO_WISH_LIST,
      payload:  e.response,
    })
  }
}

export const removeProductFromWishList =(prodId)=> async(dispatch) => {
  try{
  
    const response = await useDeleteData(`/api/v1/wishlist/${prodId}`)
    dispatch({
      type: REMOVE_FROM_WISH_LIST,
      payload:  response,
      loading: true
    })
  }catch(e){
    dispatch({
      type: REMOVE_FROM_WISH_LIST,
      payload:  e.response,
    })
  }
}

export const getProductWishList =()=> async(dispatch) => {
  try{
  
    const response = await useGetDataToken(`/api/v1/wishlist`)
    dispatch({
      type: USER_WISH_LIST,
      payload:  response,
      loading: true
    })
  }catch(e){
    dispatch({
      type: USER_WISH_LIST,
      payload:  e.response,
    })
  }
}

