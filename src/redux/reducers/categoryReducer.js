import {CREATE_CATEGORY, GET_ALL_CATEGORY,GET_ONE_CATEGORY,DELETE_CATEGORY, EDIT_CATEGORY,GET_ERROR} from "../type"

const initial={
  category:[],
  oneCategory:[],
  deleteCategory:[],
  editCategory:[],
  loading:true
}
const categoryReducer = (state=initial ,action) => {
  switch(action.type){
    case GET_ALL_CATEGORY:
      return{
        ...state ,
        category:action.payload,
        loading:false
      }
    case CREATE_CATEGORY:
      return {
        category: action.payload,
        loading: false
      }
    case GET_ONE_CATEGORY: 
      return {
        oneCategory: action.payload,
        loading: false
      }    
    case DELETE_CATEGORY: 
      return {
        deleteCategory: action.payload,
        loading: false
      }    
    case EDIT_CATEGORY: 
      return {
        editCategory: action.payload,
        loading: false
      }    
    case GET_ERROR: 
      return {
        loading:true,
        category:action.payload,
      }
      default:
        return state
  }
}

export default categoryReducer