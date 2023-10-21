import React , {useState} from 'react'
import { useDispatch } from 'react-redux';
import { deleteUserAdress } from '../../redux/action/userAdressAction';

const DeleteAddressHook = (id) => {
  const dispatch = useDispatch()
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    const handleDelete=async()=>{
        await dispatch(deleteUserAdress(id))
        setShow(false)
        window.location.reload(false)
    }
  return [show, handleClose, handleDelete, handleShow]
}

export default DeleteAddressHook
