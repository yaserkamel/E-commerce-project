import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import rate from '../../images/rate.png'
import RateItem from './RateItem'
import RatePost from './RatePost'
import Pagination from '../Utility/Pagination'
import { ViewAllReviewHook } from '../../hook/review/view-all-review-hook'
import { useParams } from 'react-router-dom'

const RateContainer = ({rateAvg , rateQty}) => {
  const {id} = useParams();
  const [allReview, onPress] = ViewAllReviewHook(id);

  return (
    <Container className='rate-container'>
    <Row>
      <Col className="d-flex align-items-center">
          <div className="sub-tile d-inline p-1 ">Ratings</div>
          <img className="" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 ">{rateAvg || 0}</div>
          <div className="rate-count d-inline p-1 ">{`(${rateQty || 0}) Rate`}</div>
      </Col>
    </Row>
    <RatePost/>
    {
      allReview.data ? ( allReview.data.map((review, index) => {
        return (
          <RateItem key={index} review={review} />
        )
      })) : <h6 className='m-3'> No Ratings </h6>
    }
    
    {
      allReview.paginationResult && allReview.paginationResult.numberOfPages >= 2 ?(
        <Pagination pageCount={allReview.paginationResult ? allReview.paginationResult.numberOfPages : 0 } onPress={onPress}/>
      ) : null
    }
    
    </Container>
  )
}

export default RateContainer
