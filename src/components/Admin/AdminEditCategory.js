import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import EditCouponHook from '../../hook/coupon/edit-coupon-hook'
import { useParams } from 'react-router-dom'
import EditCategoryHook from '../../hook/category/edit-category-hook'

const AdminEditCategory = () => {
  
  const {id} = useParams()

  const [categoryName,categoryImg,onChangeName,onChangeImg,onSubmit] = EditCategoryHook(id)
  
  return (
    <div>
    <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Edit Category</div>
        <Col sm="8">
        <div>
            <label for='upload-photo' >
                <img
                src={categoryImg}
                alt='img'
                height="100px"
                width="120px"
                style={{cursor:"pointer"}}>
                </img>
            </label>
            <input
              type='file'
              name='photo'
              onChange={onChangeImg}
              id='upload-photo'/>
        </div>
            <input
                value={categoryName}
                onChange={onChangeName}
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="Name Coupon"
                
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

export default AdminEditCategory
