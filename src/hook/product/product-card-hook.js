import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToWishList, removeProductFromWishList } from '../../redux/action/wishListAction'
import notify from '../useNotification'
import favoff from "../../images/fav-off.png";
import favon from "../../images/fav-on.png";

const ProductCardHook = (item, favProd) => {
    
    const dispatch = useDispatch()
    const [favImg, setFavImg]= useState(favoff)
    const [loadingAdd, setLoadingAdd]= useState(true)
    const [loadingRemove, setLoadingRemove]= useState(true)
    
    let Fav = favProd.some(fitem => fitem === item._id)
    const [isFav,setIsFav] = useState(Fav)


    

    useEffect(()=>{
        setIsFav(favProd.some(fitem => fitem === item._id))
    },[favProd])


    const handleFav = ()=>{
        if(isFav){
            removeFromWishListData()
        }
        else{
            addToWishListData()
        }
        // setIsFav(!isFav)
    }

    useEffect(()=>{
        if(isFav===true){
            setFavImg(favon)
        }
        else{
            setFavImg(favoff)
        }
    },[isFav])
    
    const resAdd = useSelector(state => state.wishListReducer.addWishList)
    const resRemove = useSelector(state => state.wishListReducer.removeWishList)
    // console.log(res)



    const addToWishListData = async ()=>{
        setIsFav(true)
        setFavImg(favon)
        setLoadingAdd(true)
        await dispatch(addProductToWishList({
            productId:item._id
        }))
        setLoadingAdd(false)     
    }
    
    const removeFromWishListData = async ()=>{
        setIsFav(false)
        setFavImg(favoff)
        setLoadingRemove(true)
        await dispatch(removeProductFromWishList(item._id))
        setLoadingRemove(false )
    }


    useEffect(()=>{
        if(loadingAdd === false) {
            if(resAdd && resAdd.status === 200){
                notify(" Successfully added to your favorites","success"); 
            }else if(resAdd && resAdd.status === 401){
                notify(" Please Login ","error");
            }
        }
      }, [loadingAdd])


    useEffect(()=>{
        if(loadingRemove === false) {
            if(resRemove && resRemove.status === "success"){
                notify(" Successfully deleted from your favorites","warn"); 
            }else if(resAdd && resAdd.status === 401){
                notify(" Please Login ","error");
            }
        }
      }, [loadingRemove])

    return [favImg, handleFav]
}

export default ProductCardHook
