import React from 'react'
import { useRef } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import AddCouponHook from '../../hook/coupon/add-coupon-hook'
import EditCouponHook from '../../hook/coupon/edit-coupon-hook'
import { useParams } from 'react-router-dom'

const AdminEditCoupon = () => {
  
  const {id} = useParams()

  const [coupnDate,coupnName,coupnValue,onChangeDate,onChangeName,
        onChangeValue,onSubmit] = EditCouponHook(id)
  
  return (
    <div>
    <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Edit Coupon</div>
        <Col sm="8">
            <input
                value={coupnName}
                onChange={onChangeName}
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="Name Coupon"
                
            />
            <input
                value={coupnDate}
                onChange={onChangeDate}
      
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="Expiry date"
                
            />
            <input
                value={coupnValue}
                onChange={onChangeValue}
                type="number"
                className="input-form d-block mt-3 px-3"
                placeholder="Coupon discount"
                
            />
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={onSubmit} className="btn-save d-inline mt-2 ">Update</button>
        </Col>
    </Row>
    
    
    <ToastContainer />
</div>
  )
}

export default AdminEditCoupon
