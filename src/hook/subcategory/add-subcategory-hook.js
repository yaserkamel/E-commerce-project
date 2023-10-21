
import notify from "../useNotification";
import { creatSubCategory } from "../../redux/action/subcategoryAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllCategory } from "../../redux/action/categoryAction";

const AddSubcategoryHook = () => {
  const dispatch = useDispatch();
    useEffect(()=>{
      if(!navigator.onLine)
      {
        notify("NO Internet Please Try Again","warn")
        
        return
      }
      dispatch(getAllCategory());
    },[])


    const category = useSelector(state => state.allCategory.category)
    const subcategory = useSelector(state => state.subCategory.subcategory)


    const [id,setId]=useState("0")
    const [name,setName]=useState("")
    const [loading,setLoading]=useState(true)

    const handleChange=(e)=>{
        setId(e.target.value)
    }

    const onChangeName=(e)=>{
      e.persist()
      setName(e.target.value)
  }

    
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(!navigator.onLine)
        {
            notify("NO Internet Please Try Again","warn")
            return
        }
        if(name===""){
            notify("please enter Name category","warn")
            return;
        }
        if(id==="0"){
            notify("please enter category","warn")
            return;
        }

        setLoading(true)
        await dispatch(creatSubCategory({
            name:name,
            category:id
        }))
        setLoading(false)

    }

    useEffect(()=>{
        if(loading===false){
            setId("0")
            setName("")
            if(subcategory)
            console.log(subcategory)
            if(subcategory.status === 201){
                notify("Successfully Added", "success")
            }else if(subcategory === "ErrorAxiosError: Request failed with status code 400") {
                notify("Name previously Used", "warn")
            }else {
                notify("probelme", "warn")
    
            }
            setLoading(true)
        }
    },[loading])

    return [id, name, loading, category, subcategory, handleChange, handleSubmit, onChangeName]
}

export default AddSubcategoryHook
