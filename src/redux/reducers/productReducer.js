import {UPDATE_PRODUCT,DELETE_PRODUCTS, CREATE_PRODUCT, GET_ALL_PRODUCT, GET_PRODUCT_DETAILS,GET_ERROR,GET_ALL_PRODUCT_CATEGORY , GET_PRODUCT_LIKE ,
  GET_ALL_PRODUCT_BRAND} from "../type"

const initial={
  products:[] ,
  allproducts:[],
  allproductsCategory:[],
  oneProduct:[],
  productLike:[],
  deleteProducts:[],
  updateProducts:[],
  allproductsBrand:[],
  loading:true
}
const productReducer = (state=initial ,action) => {
  switch(action.type){
    case CREATE_PRODUCT:
      return {
        products: action.payload,
        loading: false
      }  
    case GET_ALL_PRODUCT:
      return {
        ...state,
        allproducts: action.payload,
        loading: false
      }
    case GET_ALL_PRODUCT_CATEGORY:
      return {
        ...state,
        allproductsCategory: action.payload,
      }
    case GET_ALL_PRODUCT_BRAND:
      return {
        ...state,
        allproductsBrand: action.payload,
      }
    case GET_PRODUCT_DETAILS:
      return {
        oneProduct: action.payload,
        loading: false
      }    
    case GET_PRODUCT_LIKE:
      return {
        ...state,
        productLike: action.payload,
        loading: false
      }    
    case DELETE_PRODUCTS:
      return {
        ...state,
        deleteProducts: action.payload,
        loading: false
      }    
    case UPDATE_PRODUCT: 
      return {
        ...state,
        loading:true,
        updateProducts:action.payload,
      }
    case GET_ERROR: 
      return {
        loading:true,
        products:action.payload,
      }
      default:
        return state
  }
}

export default productReducer