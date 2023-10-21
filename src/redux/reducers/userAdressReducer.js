import { ADD_USER_ADRESS, ALL_USER_ADRESS, DELETE_USER_ADRESS,ONE_USER_ADRESS,EDIT_USER_ADRESS} from "../type"

const initial={
  addUserAdress:[],
  allUserAddress:[],
  deleteUserAddress:[],
  oneAddress:[],
  editAddress:[],
}
const userAdressReducer = (state=initial ,action) => {
  switch(action.type){
    case ADD_USER_ADRESS:
      return{
        ...state ,
        addUserAdress:action.payload,
        loading:false
      }
    case ALL_USER_ADRESS:
      return{
        ...state ,
        allUserAddress:action.payload,
        loading:false
      }
    case DELETE_USER_ADRESS:
      return{
        ...state ,
        deleteUserAddress:action.payload,
        loading:false
      }
    case ONE_USER_ADRESS:
      return{
        ...state ,
        oneAddress:action.payload,
      }
    case EDIT_USER_ADRESS:
      return{
        ...state ,
        editAddress:action.payload,
      }
      default:
        return state
  }
}

export default userAdressReducer