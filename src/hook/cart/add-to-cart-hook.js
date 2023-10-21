import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../../redux/action/cartAction';
import notify from '../../hook/useNotification'


const AddToCartHook = (prodId, item) => {
    const dispatch = useDispatch();

    const [indexColor, setIndexColor] = useState('')
    const [colorText, setColorText] = useState('')
    const [loading, setLoading] = useState(true)

    const colorClick = (index, color)=>{
        setIndexColor(index);
        setColorText(color)
    }
    const addToCartHandle =async ()=>{
        if(item.availableColors.length >= 1){
            if(colorText === ''){
                notify('Please Choose Color First', 'warn')
                return
            }
        }else {
            setColorText('')
        }
        setLoading(true)
        await dispatch(addProductToCart({
            productId: prodId,
            color: colorText
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.cartReducer.addToCart)

    useEffect(()=>{
        if(loading === false){
            if(res && res.status === 200){
                notify("Product added successfully to your cart", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }else {
                notify('Login First', 'warn')
            }
        }

    }, [loading])

    return [indexColor, colorClick, addToCartHandle]
}

export default AddToCartHook
