import React from 'react'
import Pagination from '../../components/Utility/Pagination'
import BrandContainer from '../../components/brand/BrandContainer'
import { AllBrandPageHook } from '../../hook/brand/all-brand-page-hook'

const AllBrandPage = () => {

  const [brand,loading,pageCount,getPage] = AllBrandPageHook()

  return (
    <div style={{minHeight:'670px'}}>

      <BrandContainer data={brand.data} loading={loading}/>
      <Pagination pageCount={pageCount} onPress={getPage}/>
    </div>
  )
}

export default AllBrandPage