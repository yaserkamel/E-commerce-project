import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/action/categoryAction';
import { getAllBrand } from '../../redux/action/brandAction';
import { getOneCategory } from '../../redux/action/subcategoryAction';
import notify from '../useNotification';
import { creatProduct } from '../../redux/action/productAction';

const AdminAddProductsHook = () => {
  const dispatch = useDispatch();

  const category = useSelector(state => state.allCategory.category)
  const brand = useSelector(state => state.allBrand.brand)
  const subCat = useSelector(state => state.subCategory.subcategory)

  const [options, setOptions] = useState([])
  const [images, setImages] = useState([]);
  const [prodName, setProdName] = useState('');
  const [prodDescription, setProdDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState("");
  const [priceAfter, setPriceAfter] = useState("");
  const [qty, setQty] = useState("");
  const [catId, setCatId] = useState('');
  const [brandId, setBrandId] = useState('');
  const [subCatId, setSubCatId] = useState([]);
  const [selectedSubId, setSelectedSubId] = useState([]);
  const [showColor, setShowColor] = useState(false);
  const [colors,setColors]=useState([]);
  const [loading,setLoading]=useState(true);
  
  
  useEffect(()=>{
      dispatch(getAllCategory());
      dispatch(getAllBrand());
  },[])
  
  const onChangeProdName = (e) => {
    e.persist();
    setProdName(e.target.value)
  }
  const onChangeProdDes = (e) => {
    e.persist();
    setProdDescription(e.target.value)
  }
  const onChangePriceBefore = (e) => {
    e.persist();
    setPriceBefore(e.target.value)
  }
  const onChangePriceAfter = (e) => {
    e.persist();
    setPriceAfter(e.target.value)
  }
  const onChangeQuantity = (e) => {
    e.persist();
    setQty(e.target.value)
  }
  const onChangeColor = (e) => {
    e.persist();
    setShowColor(!showColor)
  }
  const onSelect = (selectedList) => {
    setSelectedSubId(selectedList)
  }
  const onRemove = (selectedList) => {
    setSelectedSubId(selectedList)
  }
  const removeColor = (color) => {
      const newArr = colors.filter((item) => item !== color)
      setColors(newArr);
  }

  const onSelectCategory = async(e) => {
      if(e.target.value !== 0){
          await dispatch(getOneCategory(e.target.value))
      }
      setCatId(e.target.value)
      console.log(e.target.value)
  }
  useEffect(()=>{
      if(catId !== 0){
          if(subCat.data){
              setOptions(subCat.data)
          }
      }
  },[catId])

  const onSelectBrand = (e) => {
      setBrandId(e.target.value)
  }
  const handleChangeComplete = (color)=>{
      setColors([...colors,color.hex])
      setShowColor(false)
  }

  function dataURLtoFile(dataurl , filename){
      var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr=new Uint8Array(n);

      while(n--){
          u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr],filename,{type:mime})
  }
  const handleSubmit = async(e) => {
      e.preventDefault();

      if(catId === 0 || prodName === '' || prodDescription === '' || images.length <=0 || priceBefore <= 0 ){
        if(priceAfter>priceBefore)
        {
            notify("please enter the price after lower","warn")
            return;  
        }
          notify("please enter all inputs","warn")
          return;
      }
      const imgCover = dataURLtoFile(images[0], Math.random()+".png")
      const itemImages = Array.from(Array(Object.keys(images).length).keys()).map((item, index)=>{
          return dataURLtoFile(images[index], Math.random()+".png")
      })

      const formData = new FormData();
      
      formData.append("title", prodName);
      formData.append("description", prodDescription);
      formData.append("quantity", qty);
      formData.append("price", priceBefore);
      formData.append("priceAfterDiscount", priceAfter);
      formData.append("imageCover", imgCover);
      formData.append("category", catId);
      formData.append("brand", brandId);

      itemImages.map((item)=> formData.append("images",item))
      colors.map((color)=> formData.append("availableColors",color))
      selectedSubId.map((item)=> formData.append("subcategory",item._id) )
      
      setLoading(true)
      await dispatch(creatProduct(formData))
      setLoading(false)
  }
  const products = useSelector(state => state.allProducts.products)
  console.log(products)

  useEffect(()=>{
      if(loading === false ){
          
          setBrandId(0)
          setCatId('')
          setSelectedSubId([])
          setColors([])
          setImages([])
          setPriceAfter('')
          setPriceBefore('')
          setProdDescription('')
          setProdName('')
          setQty('')
          setTimeout(()=> setLoading(true) , 1500)

          if(products) {
              if(products.status === 201) {
                  notify("Added successfully","success"); 
              }else {
                  notify("Failed Added","error")
              }
          }
      }
  }, [loading])

  return [onChangeProdName, onChangeProdDes, onChangePriceAfter, onChangePriceBefore, onChangeQuantity, onChangeColor ,showColor, category, brand, priceAfter, images, setImages, onSelect, onRemove, options, handleChangeComplete,
  removeColor, onSelectCategory, handleSubmit, onSelectBrand, colors, priceBefore, qty, prodDescription, prodName]
}

export default AdminAddProductsHook
