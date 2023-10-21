import React from 'react'
import { Row, Spinner } from 'react-bootstrap'
import UserAllOrderItem from './UserAllOrderItem'
import UserGetAllOrderHook from '../../hook/user/use-get-all-order-hook'
import Pagination  from '../Utility/Pagination'
import SweetAlert from '../Utility/SweetAlert'
import { ToastContainer } from 'react-toastify'

const UserAllOrder = () => {
  const [userName,result,paginate,orderData,onPress,loading]= UserGetAllOrderHook()
    return (
        <div>
        <div className="admin-content-text pb-4">Numbers Of Orders:{result}</div>
        <Row className='justify-content-between'>
        {
          loading === false ? (
            orderData.length >=1 ?(orderData.map((item,index)=>{
              return(
                <UserAllOrderItem  key={index} item={item}/>
              )
            })):(<SweetAlert msg='Not Found Orders'/>)
          ) : <Spinner className='m-auto'  animation='border' variant='primary'/>
          
        }
    
        {
          paginate.numberOfPages ? (<Pagination onPress={onPress} pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0}/>) : null 
        }
        
          
        </Row>
        <ToastContainer/>
        </div>
    )
}

export default UserAllOrder
