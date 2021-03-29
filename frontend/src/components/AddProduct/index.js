import React from 'react';
import './AddProduct.css';
//import {getUser} from '../utils/common'
//import {getToken} from '../utils/common'
import {useFormik} from 'formik';
import axios from 'axios';

const AddProduct = (props) => {
    const formik = useFormik({
        initialValues:{
            name:'',
            price:'',
            tag:'',
            details:'',
        },
        onSubmit:values => {
            //console.log(values)

            let formData= new FormData();
              formData.append("image",values.file)
              formData.append('values',JSON.stringify(values))
              //console.log("token:",getToken())
           axios({
            method: 'post',
            url: `http://127.0.0.1:5000/api/product`,
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'}
            })
              .then((response) => {
                console.log("Sucess:",response.data)
                props.history.push('/admin');
                
            }).catch((err)=>{
                console.log(err)
            })
        },
        validate:values => {
            let errors = {}
            if(!values.name){
                errors.name = "Required*"
            }
            if(!values.price){
                errors.price= "Required*"
            }
            if(!values.tag){
                errors.tag = "Required*"
            }
            if(!values.details){
                errors.details= "Required*"
            }


            return errors
        }
    })
   const finalChange = (event) =>{
    formik.setFieldValue("file", event.currentTarget.files[0]);
  }
    
    return ( 
       <div className="form-container">
           <h2>Add new Product</h2>

        <form className="registration-form" onSubmit={formik.handleSubmit} >
       <fieldset>
       <legend>Create Product</legend>
       
       <label className="form-label" htmlFor="name ">Title</label>
       <input className="form-item" type="text " id="name" name="name" 
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.name}  />
       {formik.touched.name && formik.errors.name?<div className="error">{formik.errors.name}</div>:null}
     
     <label className="form-label" htmlFor="price">price</label>
       <input className="form-item" type="text " id="price" name="price" 
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.price} />
       {formik.touched.price && formik.errors.price?<div className="error">{formik.errors.price}</div>:null}
   
   
       <label className="form-label" htmlFor="tag">Product Tag</label>
       <input className="form-item" type="text " id="tag" name="tag" 
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.tag} />
       {formik.touched.tag && formik.errors.tag?<div className="error">{formik.errors.tag}</div>:null}
     
     <label className="form-label" htmlFor="file">Upload Product</label>
     <input className="form-item"  id="file" name="file" type="file"
      onChange={finalChange} />
     
     <label className="form-label" htmlFor="details">details</label>
       <input className="form-item" type="text" id="details" name="details" 
       onChange={formik.handleChange} 
       onBlur={formik.handleBlur}
       value={formik.values.details}/>
     {formik.touched.details && formik.errors.details?<div className="error">{formik.errors.details}</div>:null}
   
     <input type="submit" className="btn-submit" value="Add Product" />
   
       </fieldset>
      </form>
       </div>
     
    
     );
}
 
export default AddProduct;