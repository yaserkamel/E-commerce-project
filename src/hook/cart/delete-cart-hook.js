import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllCartItem, deleteCartItem, updateCartItem } from '../../redux/action/cartAction'
import notify from '../useNotification'

const DeleteCartHook = (item) => {
  const dispatch=useDispatch();
  const [loading,setLoading]=useState(true);
  const [show, setShow] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const res = useSelector(state=>state.cartReducer.clearCart)

  useEffect(()=>{
    if(loading===false){
      if(res === ''){
        notify('Successfuly Deleted', 'success')
        setTimeout(()=>{
          window.location.reload(false)
        },1000)
      }
      else{
      
      }
    }
  },[loading])

  useEffect(()=>{
    if(item){
      setItemCount(item.count)
    }
  },[])

  const handleDeleteCart = async() => {
    setLoading(true)
    await dispatch(clearAllCartItem())
    setLoading(false)
  }

  const handleDeleteItem=async()=>{
    await dispatch(deleteCartItem(item._id))
    setShow(false)
    window.location.reload(false)
  }

  const onChangeCount = (e)=>{
    setItemCount(e.target.value)
  }

  const handleUpdateCart = async()=>{
    await dispatch(updateCartItem(item._id, {
      count: itemCount
    }))
    window.location.reload(false)
  }

  return [loading, handleDeleteCart, show, handleClose, handleDeleteItem, handleShow, itemCount, onChangeCount, handleUpdateCart]
}

export default DeleteCartHook
