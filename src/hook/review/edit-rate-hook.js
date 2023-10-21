import { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from '../useNotification';
import { updateReview } from '../../redux/action/reviewAction';


export const EditRateHook = (review) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    const [loading, setLoading] = useState(true)
    const [showEdit, setShowEdit] = useState(false);
    const [newRateText, setNewRateText] = useState(review.review);
    const [newRateValue, setNewRateValue] = useState(review.rating);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const onChangeRateText=(e)=>{
        setNewRateText(e.target.value)
    }

    const onChangeRateValue=(val)=>{
        setNewRateValue(val)
    }

    const handleEdit=async()=>{
        setLoading(true)
        await dispatch(updateReview(review._id, {
            review: newRateText,
            rating: newRateValue
        }))
        setLoading(false)
        handleCloseEdit()
        
    }

    const res = useSelector(state => state.reviewReducer.updateReview)
    useEffect(()=>{
        if(loading===false){
            
            if(res.status && res.status === 200){
                notify("Successfuly Updated","success")
                setTimeout(() => {
                window.location.reload(false)
                }, 1000);
            }
            else{
                notify("There is a problem", "error")
            }
            
        }
    },[loading])


    return [showEdit,handleCloseEdit,handleShowEdit,handleEdit,onChangeRateText,newRateText,onChangeRateValue,newRateValue]
}
