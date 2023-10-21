import {combineReducers} from 'redux'
import categoryReducer from './categoryReducer'
import brandReducer from './brandReducer'
import subcategoryReducer from './subcategoryReducer'
import productReducer from './productReducer'
import authReducer from './authReducer'
import reviewReducer from './reviewReducer'
import wishListReducer from './wishListReducer'
import couponReducer from './couponReducer'
import userAdressReducer from './userAdressReducer'
import cartReducer from './cartReducer'
import checkoutReducer from './checkoutReducer'
import orderReducer from './orderReducer'


export default combineReducers({
  allCategory:categoryReducer,
  allBrand:brandReducer,
  subCategory:subcategoryReducer,
  allProducts:productReducer,
  authReducer:authReducer,
  reviewReducer:reviewReducer,
  wishListReducer:wishListReducer,
  couponReducer:couponReducer,
  userAdressReducer:userAdressReducer,
  cartReducer:cartReducer,
  checkoutReducer:checkoutReducer,
  orderReducer:orderReducer
})