import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import addSubcategoryHook from '../../hook/subcategory/add-subcategory-hook';


const AdminAddSubCategory = () => {
    const [id, name, loading, category, subcategory, handleChange, handleSubmit, onChangeName] = addSubcategoryHook();
    
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add New SubCategory</div>
                <Col sm="8">
                    <input
                        value={name}
                        onChange={onChangeName}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Name"
                    />
                    <select name="category" id="cat" className="select mt-3 px-2" onChange={handleChange}>
                        <option value="0">Select Category</option>
                        {
                            category.data? (category.data.map(item=>{
                                return(<option key={item._id} value={item._id}>{item.name}</option>)
                            })) : null
                        }
                    </select>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">Save</button>
                </Col>
            </Row>

            <ToastContainer/>
        </div>
    )
}

export default AdminAddSubCategory
