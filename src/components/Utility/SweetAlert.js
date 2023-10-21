import React from 'react'
import { Link } from 'react-router-dom'

const SweetAlert = ({link, msg}) => {
  return (
    <div class="alert alert-danger d-flex align-items-center justify-content-center" role="alert">
      {msg}
      {
        link ? <Link to={link} class="alert-link ms-2" >Go back</Link> : null
      }
    </div>
  )
}

export default SweetAlert
