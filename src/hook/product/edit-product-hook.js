import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/action/categoryAction';
import { getAllBrand } from '../../redux/action/brandAction';
import { getOneCategory } from '../../redux/action/subcategoryAction';
import notify from '../useNotification';
import { creatProduct, getOneProduct, updateProducts } from '../../redux/action/productAction';

const AdminEidtProductHook = (id) => {
  const dispatch = useDispatch();

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
    const run = async () => {
      await dispatch(getOneProduct(id))
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    }
    run()
  },[])

  const item = useSelector((state)=> state.allProducts.oneProduct)
  console.log(item.data)
  const category = useSelector(state => state.allCategory.category)
  const brand = useSelector(state => state.allBrand.brand)
  const subCat = useSelector(state => state.subCategory.subcategory)

  useEffect(()=>{
    if(item.data){
      setProdName(item.data.title)
      setProdDescription(item.data.description)
      setPriceBefore(item.data.price)
      setQty(item.data.quantity)
      setCatId(item.data.category)
      setBrandId(item.data.brand)
      setColors(item.data.availableColors)
      setImages(item.data.images)
    }
  }, [item])
  
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
      
      setCatId(e.target.value)
      
  }
  useEffect(()=>{
      if(catId != 0){
        const run = async()=>{
          await dispatch(getOneCategory(catId))
        }
        run();
      }
  },[catId])

  useEffect(()=>{
    
    if(subCat.data){
      setOptions(subCat.data)
    }

  }, [subCat])

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

    // convert Url to file 
    const convertURLtoFile = async (url)=> {
      const response = await fetch(url, { mode: "cors"})
      const data = await response.blob();
      const ext = url.split(".").pop();
      const filename = url.split("/").pop()
      const metadata = { type : `image/${ext}`};
      return new File([data], Math.random(), metadata);
    }

    let imgCover;
    if(images[0].length <=1000){
      convertURLtoFile(images[0]).then(val => imgCover = val)
    }else{
      imgCover = dataURLtoFile(images[0], Math.random()+".png")
    }


    let itemImages=[];
      Array.from(Array(Object.keys(images).length).keys()).map((item, index)=>{
      if(images[index].length <=1000){
        convertURLtoFile(images[index]).then(val => itemImages.push(val))
      }else{
        itemImages.push(dataURLtoFile(images[index], Math.random()+".png"))
      }
    })

    const formData = new FormData();
    
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);
    
    formData.append("category", catId);
    formData.append("brand", brandId);

    setTimeout(()=>{
      formData.append("imageCover", imgCover);
      itemImages.map((item)=> formData.append("images",item))
    },1000)
   
    colors.map((color)=> formData.append("availableColors",color))
    selectedSubId.map((item)=> formData.append("subcategory",item._id) )
    
    
    setTimeout(async()=>{
        setLoading(true)
        await dispatch(updateProducts(id,formData))
        setLoading(false)
    },1000)
  
  }
  const products = useSelector(state => state.allProducts.updateProducts)
  

  useEffect(()=>{
      if(loading === false ){
          
          setBrandId(0)
          setCatId(0)
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
              if(products.status === 200) {
                  notify("Updated successfully","success"); 
              }else {
                  notify("Failed Updated","error")
              }
          }
      }
  }, [loading])

  return [catId,brandId, onChangeProdName, onChangeProdDes, onChangePriceAfter, onChangePriceBefore, onChangeQuantity, onChangeColor ,showColor, category, brand, priceAfter, images, setImages, onSelect, onRemove, options, handleChangeComplete,
  removeColor, onSelectCategory, handleSubmit, onSelectBrand, colors, priceBefore, qty, prodDescription, prodName]
}

export default AdminEidtProductHook
