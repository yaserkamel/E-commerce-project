import { GET_ALL_ORDERS,GET_ONE_ORDERS,UPDATE_ORDER_PAY ,UPDATE_ORDER_DELIVER} from "../type"
import { useInsertData } from "../../hooks/useInsertData"
import {useGetDataToken} from '../../hooks/useGetData'
import { useUpdateData } from "../../hooks/useUpdatData"


export const getAllOrders =(page,limit)=> async(dispatch) => {
  try{
  
    const response = await useGetDataToken(`/api/v1/orders?limit=${limit}&page=${page}`)
    dispatch({
      type: GET_ALL_ORDERS,
      payload:  response,
    })
  }catch(e){
    dispatch({
      type: GET_ALL_ORDERS,
      payload: e.response,
    })
  }
}



export const getOneOrders =(id)=> async(dispatch) => {
  try{
  
    const response = await useGetDataToken(`/api/v1/orders/${id}`)
    dispatch({
      type: GET_ONE_ORDERS,
      payload:  response,
    })
  }catch(e){
    dispatch({
      type: GET_ONE_ORDERS,
      payload: e.response,
    })
  }
}


export const changeOrderPay =(id)=> async(dispatch) => {
  try{
  
    const response = await useUpdateData(`/api/v1/orders/${id}/pay`)
    dispatch({
      type: UPDATE_ORDER_PAY,
      payload:  response,
    })
  }catch(e){
    dispatch({
      type: UPDATE_ORDER_PAY,
      payload: e.response,
    })
  }
}


export const changeOrderDeliver =(id)=> async(dispatch) => {
  try{
  
    const response = await useUpdateData(`/api/v1/orders/${id}/deliver`)
    console.log(response)
    dispatch({
      type: UPDATE_ORDER_DELIVER,
      payload:  response,
    })
  }catch(e){
    dispatch({
      type: UPDATE_ORDER_DELIVER,
      payload: e.response,
    })
  }
}

