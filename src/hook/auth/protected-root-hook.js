import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ProtectedRootHook = () => {
  const [userData,setUserData]= useState(JSON.parse(localStorage.getItem("user")))
  const [isUser,setIsUser]= useState()
  const [isAdmin,setIsAdmin]= useState()

  useEffect(()=>{
    if(userData!==null){
      if(userData.role==="user"){
        setIsUser(true)
        setIsAdmin(false)
      }else{
        setIsAdmin(true)
        setIsUser(false)
      }
    }else{
      setIsAdmin(false)
      setIsUser(false)
    }
  },[])

  return [isUser,isAdmin,userData]
}

export default ProtectedRootHook
