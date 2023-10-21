import {RESET_PASSWORD,CREATE_NEW_USER,LOGIN_USER, FORGET_PASSWORD, VERIFY_PASSWORD,UPDATE_USER_PROFILE,UPDATE_USER_PASSWORD} from "../type"

const initial={
  createUser:[],
  loginUser:[],
  forgetPassword:[],
  verifyPassword:[],
  resetPassword:[],
  userProfile:[],
  userChangePassword:[],
  loading:true
}
const authReducer = (state=initial ,action) => {
  switch(action.type){
    case CREATE_NEW_USER:
      return{
        ...state ,
        createUser:action.payload
      }
    case LOGIN_USER:
      return{
        ...state ,
        loginUser:action.payload
      }
    case FORGET_PASSWORD:
      return{
        ...state ,
        forgetPassword:action.payload
      }
    case VERIFY_PASSWORD:
      return{
        ...state ,
        verifyPassword:action.payload
      }
    case RESET_PASSWORD:
      return{
        ...state ,
        resetPassword:action.payload
      }
    case UPDATE_USER_PROFILE:
      return{
        ...state ,
        userProfile:action.payload
      }
    case UPDATE_USER_PASSWORD:
      return{
        ...state ,
        userChangePassword:action.payload
      }
    default:
      return state
}
}
export default authReducer;