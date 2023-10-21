import React, { useState } from 'react'
import { Col,Card,Row, Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteProducts } from '../../redux/action/productAction'

const AdminAllProductsCard = ({item}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    const handleDelete=async()=>{
        await dispatch(deleteProducts(item._id))
        setShow(false)
        window.location.reload()
    }
    return (
        <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className='font'>Confirm Delete</Modal.Title>
            </Modal.Header>
        <Modal.Body className='font'>Are you sure to delete?</Modal.Body>
            <Modal.Footer>
                <Button className='font' variant="dark" onClick={handleClose}>NO</Button>
                <Button className='font' variant="success" onClick={handleDelete}>Yes</Button>
            </Modal.Footer>
        </Modal>
            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
                }}>
                <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                        <Link to={`/admin/editproduct/${item._id}`} style={{ textDecoration: "none" }}>
                            <div className="d-inline item-delete-edit">Edit</div>
                        </Link>
                        <div onClick={handleShow} className="d-inline item-delete-edit">Delete</div>
                        
                        
                    </Col>
                </Row>
                <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
                    <div className='d-flex justify-content-center pt-2'>
                        <Card.Img style={{ height: "228px", width: "80%"}} src={item.imageCover} />
                    </div>
                    <Card.Body>
                        <Card.Title>
                            <div className="card-title">
                                {item.title}
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-between">
                                <div className="card-rate">{item.ratingsQuantity}</div>
                                <div className="d-flex align-items-center">
                                    <div className="card-price">  {
                                        item.priceAfterDiscount >= 1 ? (
                                        <div><span style={{textDecoration:'line-through',marginRight: '10px'}}>{item.price}</span>
                                        {item.priceAfterDiscount}SP</div>    
                                        ): `${item.price} SP`  
                                    }</div>
                                    <div className="card-currency mx-1">$</div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    )
}

export default AdminAllProductsCard


