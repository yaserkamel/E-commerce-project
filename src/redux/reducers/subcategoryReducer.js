import {CREATE_SUB_CATEGORY,GET_SUB_CATEGORY, GET_ERROR} from "../type"

const initial={
  subcategory:[] ,
  loading:true
}
const subcategoryReducer = (state=initial ,action) => {
  switch(action.type){
    case CREATE_SUB_CATEGORY:
      return {
        subcategory: action.payload,
        loading: false
      }  
    case GET_SUB_CATEGORY:
      return {
        subcategory: action.payload,
        loading: false
      }  
    case GET_ERROR: 
      return {
        loading:true,
        subcategory:action.payload,
      }
      default:
        return state
  }
}

export default subcategoryReducer