import React from 'react'
import { Row } from 'react-bootstrap'
import SidebarSearchHook from '../../hook/search/sidebar-search-hook'

const SideFilter = () => {
  
  const [category, brand, clickCategory,clickBrand, priceFrom, priceTo] = SidebarSearchHook()

  let localFrom  = localStorage.getItem("priceFrom")
  let localTo  = localStorage.getItem("priceTo")
  return (
    <div className="mt-3">
        <Row>
          <div className="d-flex flex-column mt-2">
            <div className="filter-title"> Filter by Category</div>
            <div className="d-flex mt-3">
              <input id='0' type="checkbox" value="" />
              <label for='0' className="filter-sub ms-2 ">All</label>
            </div>
            {
              category ? (category.map((item, index)=>{
                return (
                  <div key={index} className="d-flex mt-3">
                    <input id={item._id} onChange={clickCategory} type="checkbox" value={item._id} />
                    <label for={item._id} className="filter-sub ms-2">{item.name}</label>
                  </div>
                )
              })) : <h6>No Category Found</h6>
            }
          </div>
  
          <div className="d-flex flex-column mt-2">
            <div className="filter-title mt-3">Filter by Brand</div>
            <div className="d-flex mt-3">
              <input id='01' type="checkbox" value="" />
              <label for='01' className="filter-sub ms-2 ">All</label>
            </div>
            {
              brand ? (brand.map((item,index) => {
                return (
                  <div key={index} className="d-flex mt-3">
                    <input id={item._id} onChange={clickBrand} type="checkbox" value={item._id}/>
                    <label for={item._id} className="filter-sub ms-2 ">{item.name}</label>
                  </div>
                )
              })) : <h6>No Brand Found</h6>
            }
            
          </div>
  
          <div className="filter-title my-3"> Filter by Price</div>
          <div className="d-flex">
            <p className="filter-sub my-2">From:</p>
            <input
              value={localFrom}
              onChange={priceFrom}
              className="m-2 text-center"
              type="number"
              style={{ width: "50px", height: "25px" }}
            />
          </div>
          <div className="d-flex">
            <p className="filter-sub my-2">To:</p>
            <input
              value={localTo}
              onChange={priceTo}
              className="m-2 text-center"
              type="number"
              style={{ width: "50px", height: "25px" }}
            />
          </div>
        </Row>
      </div>
  )
}

export default SideFilter