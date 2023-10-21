import {ADD_TO_WISH_LIST, REMOVE_FROM_WISH_LIST, USER_WISH_LIST} from "../type"

const initial={
  addWishList:[],
  removeWishList:[],
  allWishList:[]
}
const wishListReducer = (state=initial ,action) => {
  switch(action.type){
    case ADD_TO_WISH_LIST:
      return{
        ...state ,
        addWishList:action.payload,
        loading:false
      }
    case REMOVE_FROM_WISH_LIST:
      return{
        ...state ,
        removeWishList:action.payload,
        loading:false
      }
    case USER_WISH_LIST:
      return{
        ...state ,
        allWishList:action.payload,
        loading:false
      }
    
      default:
        return state
  }
}

export default wishListReducer