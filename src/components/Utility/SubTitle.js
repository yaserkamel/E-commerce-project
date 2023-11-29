import React from 'react'
import { Link } from 'react-router-dom'

const SubTitle = ({title, btntitle, pathtext}) => {
  return (
    <div className='d-flex justify-content-between align-items-center pt-4'>
      <div className='sub-title'> {title}</div>
      {btntitle ? (
        <Link to={`${pathtext}`} style={{textDecoration:'none'}}>
          <div className='shopping-now'>{btntitle}</div>
        </Link>
      ) : null }
    </div>
  )
}

export default SubTitle  