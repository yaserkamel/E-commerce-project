import React from 'react'
import UnopDropdown from "unop-react-dropdown";
import sort from '../../images/sort.png'
const SearchCountResult = ({title , onClick}) => {
    const handler=()=> {

    }
    const clickMe=(key)=> {
        localStorage.setItem("sortType" , key)
        onClick()
    }
    return (
        <div className="d-flex justify-content-between pt-3 px-2">
            <div className="sub-tile">{title}</div>
            <div className="search-count-text d-flex ">
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <p className="mx-1">
                            <img
                                width="20px"
                                height="20px"
                                className="me-1"
                                src={sort}
                                alt=""
                            />
                            Sort by
                        </p>
                    }
                    delay={0}
                    align="CENTER"
                    hover>
                    <div className="card-filter">
                        <div onClick={()=> clickMe("")} className=" card-filter-item"> No Sort  </div>
                        <div onClick={()=> clickMe("More Sale")} className=" card-filter-item">More Sale </div>
                        <div onClick={()=> clickMe("More Rated")} className=" card-filter-item">More Rated </div>
                        <div onClick={()=> clickMe("Price From Low To High")} className=" card-filter-item">  Price From Low To High </div>
                        <div onClick={()=> clickMe("Price From High To Low")} className=" card-filter-item">  Price From High To Low  </div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    )
}

export default SearchCountResult
