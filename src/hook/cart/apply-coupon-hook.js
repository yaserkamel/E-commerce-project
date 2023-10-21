import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import notify from '../useNotification';
import { applyCouponCart } from '../../redux/action/cartAction';
import { useNavigate } from 'react-router-dom';

const ApplyCouponHook = (cartItems) => {
    const dispatch = useDispatch();
    const navigate=useNavigate()

    const [couponName, setCouponName] = useState('');
    const [loading, setLoading] = useState(true);

    const onChangeCouponName = (e)=>{
        setCouponName(e)
    }
    const handleSubmitCoupon = async() =>{
        if(couponName === ''){
            notify('Please enter coupon name', 'warn')
            return
        }
        setLoading(true)
        await dispatch(applyCouponCart({
            couponName:couponName
        }))
        setLoading(false)
    }
    const res = useSelector(state=>state.cartReducer.applyCoupon)
    useEffect(()=>{
        if(loading===false){
            if(res && res.status === 200){
                // console.log(res)
                notify("Successfully Applied Coupon", "success")
                setTimeout(()=>{
                    window.location.reload(false)
                }, 1000)
            }else {
                notify('Coupon is invalid or has expired', 'warn')
            }
        }
    },[loading])

    const handleCheckOut=()=>{
        if(cartItems.length >=1){
            navigate("/order/paymethod")
        }else{
            notify("please enter product for cart","warn")
        }
    }


    return [couponName, onChangeCouponName, handleSubmitCoupon, handleCheckOut]
}

export default ApplyCouponHook
