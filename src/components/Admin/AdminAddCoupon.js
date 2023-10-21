import React, { useRef } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import AddCouponHook from '../../hook/coupon/add-coupon-hook'
import AdminCouponCard from './AdminCouponCard'

const AdminAddCoupon = () => {

    const [coupnDate,coupnName,coupnValue,onChangeDate,onChangeName,onChangeValue,onSubmit,allCoupon] = AddCouponHook()
    console.log(allCoupon)
    const dateRef = useRef()
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add New Coupon</div>
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
                        ref={dateRef}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Expiry date"
                        onFocus={()=> dateRef.current.type = 'date'}
                        onBlur={()=>  dateRef.current.type = 'text'}
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
                    <button onClick={onSubmit} className="btn-save d-inline mt-2 ">Save</button>
                </Col>
            </Row>
            
            <Row>
                <Col sm="8" className=''>
                {
                
                    allCoupon.data ? (allCoupon.data.map((item,index)=>{
                        return(
                            <AdminCouponCard key={index} coupon={item} />
                        )
                    })) : (<h6>No Coupon </h6>)
                }
                </Col>
            </Row>
            
            <ToastContainer />
        </div>
    )
}

export default AdminAddCoupon
