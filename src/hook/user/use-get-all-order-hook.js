import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllOrders } from '../../redux/action/orderAction';
import notify from '../useNotification';
import checkInternet from '../checkInternet';

const UserGetAllOrderHook = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState( true)
    const [result,setResult] = useState(0)
    const [paginate,setPaginate] = useState({})
    const [orderData,setOrderData] = useState([])

    const user = JSON.parse(localStorage.getItem('user'))
    let userName = '';
    if(user != null){
        userName= user.name
    }

    const get = async()=>{
        setLoading(true)
        await dispatch(getAllOrders("",2))
        setLoading(false)
    }

    const onPress=async(page)=>{
        setLoading(true)
        await dispatch(getAllOrders(page,2))
        setLoading(false)
    }
    useEffect(()=>{
        get()
    },[])

    const resAllOrders = useSelector(state=> state.orderReducer.getAllOrders)
    useEffect(()=>{
        if(loading===false){
            if(resAllOrders.results)
                setResult(resAllOrders.results)

            if(resAllOrders.paginationResult)
                setPaginate(resAllOrders.paginationResult)
            
            if(resAllOrders.data)
                setOrderData(resAllOrders.data)
            

            console.log(resAllOrders)
    }
    },[loading])

    return [userName,result,paginate,orderData,onPress,loading]
}

export default UserGetAllOrderHook
