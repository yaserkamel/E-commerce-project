import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserAddressCard from './UserAddressCard'
import ViewAddressesHook from '../../hook/user/view-addresses-hook'
import SweetAlert from '../Utility/SweetAlert'
import Spinner from '../Utility/Spinner'

const UserAllAddress = () => {
    const [allAddresses, loading] = ViewAddressesHook();
    return (
        <div>
            <div className="admin-content-text pb-4">All Addresses</div>
            <Row className='mb-5'>
                {
                    loading === false ? (
                        allAddresses.data ? allAddresses.data.map((address, index)=>{
                            return(
                                <UserAddressCard key={index}  address={address} />
                            )
                        }) : <SweetAlert msg='Not Found Addresses'/>
                    ) : <Spinner/>
                    
                }
            </Row>
        

            <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/user/add-address" style={{ textDecoration: "none" }}>
                        <button className="btn-add-address">اضافه عنوان جديد</button>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllAddress
