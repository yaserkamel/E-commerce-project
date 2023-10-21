import { GET_ALL_ORDERS,GET_ONE_ORDERS,UPDATE_ORDER_PAY, UPDATE_ORDER_DELIVER } from "../type"

const initial={
  getAllOrders:[],
  getOneOrders:[],
  changePay:[],
  changeDeliver:[]
}
const orderReducer = (state=initial ,action) => {
  switch(action.type){
    case GET_ALL_ORDERS:
      return{
        ...state ,
        getAllOrders:action.payload,
      }
    case GET_ONE_ORDERS:
      return{
        ...state ,
        getOneOrders:action.payload,
      }
      case UPDATE_ORDER_PAY:
      return{
        ...state ,
        changePay:action.payload,
      }
      case UPDATE_ORDER_DELIVER:
      return{
        ...state ,
        changeDeliver:action.payload,
      }
      default:
        return state
  }
}

export default orderReducer