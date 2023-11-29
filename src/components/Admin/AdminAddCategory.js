import React from 'react'
import { Col, Row, Spinner} from 'react-bootstrap'
import { AddCategoryHook } from '../../hook/category/add-category-hook'
import { ToastContainer } from 'react-toastify'
import AdminCategoryCard from './AdminCategoryCard'
import { Fade } from 'react-reveal'

const AdminAddCategory = () => {
   
    const [img,name,loading,isPress,handleSubmit,onImageChange,onChangeName, result, loadingData] = AddCategoryHook()
    console.log(result)

   

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add New Category</div>
                <Col sm="8">
                    <div className="text-form pb-2">Image</div>
                    <div>
                        <label for='upload-photo' >
                            <img
                            src={img}
                            alt='click'
                            height="100px"
                            width="120px"
                            style={{cursor:"pointer"}}>
                            </img>
                        </label>
                        <input
                        type='file'
                        name='photo'
                        onChange={onImageChange}
                        id='upload-photo'/>
                    </div>
                    <input
                        onChange={onChangeName}
                        value={name}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Name"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">Save</button>
                </Col>
            </Row>
            {
                isPress ? loading ? <Spinner className='m-auto' animation='border' variant='primary' /> : <h4>  completed added</h4> : null
            }

            <Row>
                <Col sm="8" className=''>
                
                {
                    loadingData === false ?(
                    result.length > 0 ?(result.map((cat, index)=>{
                        return (
                            <Fade left>
                                <AdminCategoryCard  key={index} category={cat}/>
                            </Fade>
                        )
                        })) : <h3>No Categories Found</h3>)
                        : <Spinner  animation='border' variant='primary'/>
                }
                
                </Col>
            </Row>

            <ToastContainer />
        </div>
        
    )
}

export default AdminAddCategory

