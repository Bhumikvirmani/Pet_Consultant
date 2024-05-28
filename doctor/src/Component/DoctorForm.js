import React, { useState } from 'react'
import cart from '../assets/cart.png'
import './DoctorForm.css'
const DoctorForm = () => {
  const [image,setImage] = useState(false);
  const[productDetails,setproductDetails] = useState({
    name:"",
    image:"",
    category:"Dog",
    Clinic:"",
  })
  const imageHandler = (e)=>{
    setImage(e.target.files[0])
  }
  const changeHandler  = (e) =>{
    setproductDetails({...productDetails,[e.target.name]:e.target.value})
  }
  const Add_Product = async ()=>{
    debugger;
    // console.log(productDetails)
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('doc',image);
    await fetch("http://localhost:4000/Uploaddoc",{
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData
    }).then((resp)=>resp.json()).then((data)=>{responseData=data});

    if(responseData.success){
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:4000/AddDetailsDoc",{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(product)
      }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("product added"):alert("Fail")
      });
    }
  } 
  return (
    <div className='addproduct'>
      <div className='addproduct-itemfield'>
        <p>Doctor Name</p>
        <input value={productDetails.name} onChange={changeHandler}type='text' name='name' placeholder='Doctor name'/>
      </div>
      <div className='addproduct-price'>
        <div className='addproduct-itemfield'>
          <p>Clinic Address</p>
          <input value={productDetails.Clinic} onChange={changeHandler} type='text' name='Clinic' placeholder='Clinic Address'/>
        </div>
      </div>
      <div className='addproduct-itemfield'>
        <p>Doctor Specialist</p>
        <select value={productDetails.category} onChange={changeHandler} name='category' className='add-product-selector'>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Rabbit">Rabbit</option>
        </select>
      </div>
      <div className='addproduct-itemfield'>
        <label htmlFor='file-input'>
          <img className='nav-profile'src={image?URL.createObjectURL(image):cart} alt=''/>
        </label>
        <input onChange={imageHandler}type='file' name='image' id='file-input' hidden/>
      </div>
      <button onClick={()=>{ Add_Product()}} className='addproduct-btn'>Add</button>
    </div>
  )
}

export default DoctorForm
