import { CREATE_REVIEW , ALL_REVIEW_PRODUCT ,DELETE_REVIEW,UPDATE_REVIEW} from "../type"
import useGetData, { useGetDataToken } from "../../hooks/useGetData"
import { useInsertData} from "../../hooks/useInsertData"
import useDeleteData from  "../../hooks/useDeleteData"
import { useUpdateData } from "../../hooks/useUpdatData"


export const createReview =(prodID , body)=> async(dispatch) => {
  try{
  
    const response = await useInsertData(`/api/v1/products/${prodID}/reviews`, body)
    // console.log(response.data)
    dispatch({
      type: CREATE_REVIEW,
      payload:  response,
    })
  }catch(e){
    dispatch({
      type: CREATE_REVIEW,
      payload: e.response,
    })
  }
}



export const allReviewProduct =(prodID, page, limit)=> async(dispatch) => {
  try{
  
    const response = await useGetDataToken(`/api/v1/products/${prodID}/reviews?page=${page}&limit=${limit}`)
    // console.log(response.data)
    dispatch({
      type: ALL_REVIEW_PRODUCT,
      payload:  response,
    })
  }catch(e){
    dispatch({
      type: ALL_REVIEW_PRODUCT,
      payload: e.response,
    })
  }
}



export const deleteReview =(id)=> async(dispatch) => {
  try{
  
    const response = await useDeleteData(`/api/v1/reviews/${id}`)
    // console.log(response.data)
    dispatch({
      type: DELETE_REVIEW,
      payload:  response,
    })
  }catch(e){
    dispatch({
      type: DELETE_REVIEW,
      payload: e.response,
    })
  }
}
export const updateReview =(id, body)=> async(dispatch) => {
  try{
  
    const response = await useUpdateData(`/api/v1/reviews/${id}`, body)
    // console.log(response.data)
    dispatch({
      type: UPDATE_REVIEW,
      payload:  response,
    })
  }catch(e){
    dispatch({
      type: UPDATE_REVIEW,
      payload: e.response,
    })
  }
}