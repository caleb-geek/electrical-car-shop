import React,{useState,useEffect} from 'react';
import './EditProduct.css';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import {Link, useParams} from 'react-router-dom'
import axios from 'axios';

const EditProduct = (props) => {
    const [data,setData] = useState(null)
    const [photo,setPhoto] = useState({artifact_photo:""})
    const [success,setSucess] = useState("")
    const [error,setError] = useState("")
    let {id} =useParams()

    useEffect( ()=>{
        axios.get(`http://127.0.0.1:5000/api/product/${id}`)
        .then((result)=>{
            setData(result.data)
            setPhoto(result.data.image)
        })
    },[]);

    const onSubmit = values => {
      
    
        let formData= new FormData();
        formData.append("image",values.file)
        formData.append('values',JSON.stringify(values))
       console.log(formData.getAll('image'))
       axios({
        method: 'put',
        url: `http://127.0.0.1:5000/api/product/${id}`,
        data: formData,
        headers: {'Content-Type': 'multipart/form-data' }
        })
          .then((response) => {
            console.log("Sucess:",response.data)
            setSucess({message:"Product updated successfully"})
            
        }).catch((err)=>{
            setError({message:err.response.data.message})
        })
    }
    
    const validate = values => {
        let errors = {}
        if(!values.name){
            errors.name = "Required*"
        }
        if(!values.tag){
            errors.tag= "Required*"
        }
        if(!values.details){
            errors.details = "Required*"
        }
        if(!values.price){
            errors.price= "Required*"
        }
        return errors
    }
    let edited = ""
    if(success.message){
      edited = <div className="reg-success">{success.message}</div>
    }
    let err = ""
    if(error.message){
      err = <div className="reg-error">{error.message}</div>
    }
    
    return ( 
        
        <Formik
        initialValues={data}
        validate ={validate}
        onSubmit ={onSubmit}
        enableReinitialize
        > 
        
       {props => (
         <form onSubmit={props.handleSubmit} className="registration-form ">
            <h2>Update Product Details </h2>
            {err}
           <fieldset>
           <legend>Update</legend>
           
           <label className="form-label" htmlFor="name ">Title</label>
           <Field className="form-item" type="text " id="name" name="name" 
            />
           <ErrorMessage name="name" />
         
         <label className="form-label" htmlFor="price">Price</label>
           <Field className="form-item" type="text " id="price" name="price" 
            />
            <ErrorMessage name="price" />
       
       
           <label className="form-label" htmlFor="tag">Product Tag</label>
           <Field className="form-item" type="text " id="tag" name="tag" 
           />
            <ErrorMessage name="tag" />
         
         <label className="form-label" htmlFor="file">Upload Product</label>
         <input className="form-item"  id="file" name="file" type="file"
         onChange={(event) => {
          props.setFieldValue("file", event.currentTarget.files[0]);
          const reader = new FileReader()
          reader.onload = () => {
            if(reader.readyState === 2){
              setPhoto(reader.result)
            }
            }
            reader.readAsDataURL(event.target.files[0])
        }}
           />
           <img src={photo} className="img-artifact" alt=""/>
         
         <label className="form-label" htmlFor="details">details</label>
           <Field className="form-item" type="text" id="details" name="details" 
           />
          <ErrorMessage name="details" />
          <div className="btns">
          <Link to={'/admin'} className="btn-back"> Back</Link>
         <Field type="submit" className="btn-submit" value="Edit Product" />
          </div>
         
       
           </fieldset>
           {edited} 
         </form>
        
       )}
      
  </Formik>
      
    
     );
}
 
export default EditProduct;