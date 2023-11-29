import React from 'react'
import CategoryContainer from '../../components/Category/CategoryContainer'
import Pagination  from '../../components/Utility/Pagination'
import { AllCategoryPageHook } from '../../hook/category/all-category-page-hook';
import { useEffect } from 'react';
const AllCategoryPage = () => {

  const [category,loading,pageCount,getPage]=AllCategoryPageHook()
  let categories = []
  try{
    if(category.data){
      categories = category.data
    }
  }catch(e){}

  return (
    <div style={{minHeight:'670px'}}>

      <CategoryContainer data={categories} loading={loading} />
      {
        pageCount>1?(<Pagination pageCount={pageCount} onPress={getPage}/>):null
      }
      
    </div>
  )
}

export default AllCategoryPage
