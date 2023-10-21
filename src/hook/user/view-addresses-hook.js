import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserAdress } from '../../redux/action/userAdressAction'

const ViewAddressesHook = () => {
  const dispatch = useDispatch()
  const [loading,setLoading]= useState(true)

  const allAddresses = useSelector(state => state.userAdressReducer.allUserAddress)
  // console.log(allAddresses)
  
  useEffect(()=>{
    const get = async()=>{
      setLoading(true)
      await dispatch(getAllUserAdress())
      setLoading(false)
    }
    get()
  },[])

  useEffect(()=>{
    if(loading===false){
      
    }
  },[loading])

  return [allAddresses, loading]
}

export default ViewAddressesHook
