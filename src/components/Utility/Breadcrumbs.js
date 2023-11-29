import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = '';
  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink += `/${crumb}`
      
      return (
        <li class="breadcrumb-itemm">
          <Link to={currentLink} className=''>{crumb}</Link>
        </li>
      )
    })
  return (
    <ol class="breadcrumb-list">
      <li class="breadcrumb-itemm"><Link to="/">Home</Link></li>
      {crumbs}
    </ol>
  )
}

export default Breadcrumbs
