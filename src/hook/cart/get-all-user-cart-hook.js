import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, getAllUserCartItems } from '../../redux/action/cartAction';
import notify from '../../hook/useNotification'

const GetAllUserCartHook = () => {
  const dispatch=useDispatch()
  const [loading,setLoading]=useState(true)
  const [itemsNum,setItemsNum]=useState('')
  const [cartItems,setCartItems]=useState([])
  const [totalCartPrice, setTotalCartPrice] = useState(0)
  const [totalCartPriceAfterDiscount, setTotalCartPriceAfterDiscount] = useState(0)
  const [couponNameRes, setCouponNameRes] = useState('')
  const [cartID, setCartID] = useState('0')

  useEffect(()=>{
    const get=async()=>{
      setLoading(true)
      await dispatch(getAllUserCartItems())
      setLoading(false)
    }
    get()
  },[])

  const res = useSelector(state=>state.cartReducer.getAllUserCart)

  useEffect(()=>{
    if(loading===false){
      if(res && res.status==="success"){
        setItemsNum(res.numOfCartItems)
        setCartItems(res.data.products)
        setTotalCartPrice(res.data.totalCartPrice)
        setCartID(res.data._id)

        if(res.data.coupon){
          setCouponNameRes(res.data.coupon)
        }else {
          setCouponNameRes('')
        }
        if(res.data.totalAfterDiscount){
          setTotalCartPriceAfterDiscount(res.data.totalAfterDiscount)
        }else {
          setTotalCartPriceAfterDiscount('')
        }
      }
      else{
        setCartID('0')
        setCouponNameRes('')
        setTotalCartPriceAfterDiscount('')
        setItemsNum(0)
        setCartItems([])
        setTotalCartPrice(0)
      }
    }
  },[loading])

  return [itemsNum, cartItems, totalCartPrice, couponNameRes, totalCartPriceAfterDiscount, cartID]
}

export default GetAllUserCartHook
