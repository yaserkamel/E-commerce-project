import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllOrdersItem from './AdminAllOrdersItem'
import UserGetAllOrderHook from '../../hook/user/use-get-all-order-hook'
import Pagination  from '../Utility/Pagination'

const AdminAllOrders = () => {
    const [userName,result,paginate,orderData,onPress]= UserGetAllOrderHook()
    return (
        <div>
            <div className='admin-content-text mb-2'>All Orders Management</div>
            <Row className='justify-content-start'>
            {
                orderData.length >=1 ?(orderData.map((item,index)=>{
                  return(
                    <AdminAllOrdersItem  key={index} item={item}/>
                  )
                })):(<h6>no data</h6>)
            }

            {
                paginate.numberOfPages ? (<Pagination onPress={onPress} pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0}/>) : null 
              }
             
                
            </Row>
        </div>
    )
}

export default AdminAllOrders

