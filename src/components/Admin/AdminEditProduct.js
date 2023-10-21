import Multiselect from 'multiselect-react-dropdown';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { CompactPicker } from 'react-color';
import MultiImageInput from 'react-multiple-image-input';
import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AdminEidtProductHook from '../../hook/product/edit-product-hook';
import add from '../../images/add.png'

const AdminEditProduct = () => {
  const {id} = useParams();
  const  [catId, branId, onChangeProdName, onChangeProdDes, onChangePriceAfter, onChangePriceBefore, onChangeQuantity,
          onChangeColor ,showColor, category, brand, priceAfter, images, setImages, onSelect, onRemove,
          options, handleChangeComplete, removeColor, onSelectCategory, handleSubmit, onSelectBrand,
          colors, priceBefore, qty, prodDescription, prodName] = AdminEidtProductHook(id)

          console.log(catId);
  return (
    <div>
        <Row className="justify-content-start ">
            <div className="admin-content-text pb-4"> Edit Product</div>
            <Col sm="8">
                <div className="text-form pb-2"> Product Images</div>
                
                <MultiImageInput
                    images={images}
                    setImages={setImages}
                    theme={"light"}
                    allowCrop={false}
                    max={3}
                />
                <input
                    value={prodName}
                    onChange={onChangeProdName}
                    type="text"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Name"
                />
                <textarea
                    value={prodDescription}
                    onChange={onChangeProdDes}
                    className="input-form-area p-2 mt-3"
                    rows="4"
                    cols="50"
                    placeholder="Description"
                />
                <input
                    value={priceBefore}
                    onChange={onChangePriceBefore}
                    type="number"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Price Before Discount"
                />
                <input
                    value={priceAfter}
                    onChange={onChangePriceAfter}
                    type="number"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Price After Discount"
                />
                <input
                    value={qty}
                    onChange={onChangeQuantity}
                    type="number"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Quantity"
                />
                <select
                    value={catId}
                    onChange={onSelectCategory}
                    name="cat"
                    className="select input-form-area mt-3 px-2 ">
                    <option value="0">Select Category</option>
                    {
                        category.data? (category.data.map(item=>{
                            return(
                                <option key={item._id} value={item._id}>{item.name}</option>
                            )
                        })) : null
                    }
                </select>
                <Multiselect
                    className="mt-2 text-end"
                    placeholder="Subcategory"
                    options={options}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    displayValue="name"
                    style={{ color: "red" }}
                />
                <select
                    value={branId}
                    onChange={onSelectBrand}
                    name="brand"
                    className="select input-form-area mt-3 px-2 ">
                    <option value="0">Select Brand</option>
                    {
                        brand.data? (brand.data.map(item=>{
                            return(
                                <option key={item._id} value={item._id}>{item.name}</option>
                            )
                        })) : null
                    }
                </select>
                <div className="text-form mt-3 ">Available  Colors </div>
                <div className="mt-1 d-flex">
                {
                    colors.length>=1 ? (colors.map((color,index) =>{
                        return(
                        <div
                            key={index}
                            onClick={()=>removeColor(color)}
                            className="color ms-2 border  mt-1"
                            style={{ backgroundColor: color }}>
                        </div>
                        )
                    })) : null 
                }
                   
                    <img onClick={onChangeColor} src={add} alt="" width="30px" height="35px"style={{cursor:'pointer'}}/>
                    {
                        showColor===true? <CompactPicker onChangeComplete={handleChangeComplete}/> : null
                    }
                    
                </div>
            </Col>
        </Row>
        <Row>
            <Col sm="8" className="d-flex justify-content-end ">
                <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">Update</button>
            </Col>
        </Row>
        <ToastContainer/>
    </div>
)
}

export default AdminEditProduct
