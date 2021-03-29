import React,{useState} from 'react';
import './Register.css';
import {useFormik} from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Register = (props) => {
  const [error,setError] = useState("")
  const [success,setSuccess] = useState("")
    const formik = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
            username:'',
            password:'',
            address:'',
            contact:'',
            admin:true
        },
        onSubmit:values => {
            
              axios.post ('http://localhost:5000/api/user', values)
              .then((response) => {
                setSuccess({message:"Account Created Successfully"})
                //props.history.push('/login')
            }).catch((err)=>{
               setError({message:err.response.message})
            })
        },
        validate:values => {
            let errors = {}
            if(!values.firstname){
                errors.firstname = "Required*"
            }
            if(!values.lastname){
                errors.lastname = "Required*"
            }
            if(!values.email){
                errors.email = "Required"
            }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)){
              errors.email="Invaid email format"
            }
            if(!values.username){
                errors.username = "Required*"
            }
            if(!values.password){
                errors.password = "Required*"
            }
            if(!values.contact){
                errors.contact = "Required*"
            }
            if(!values.address){
                errors.address = "Required*"
            }


            return errors
        }
    })

     let created =""
    if(success.message) {
      created= (<div className="reg-success">
        {success.message}
      </div>)
    }
    let err =""
    if(error.message) {
      err= (<div className="reg-error">
        {error.message}
      </div>)
    }
    
    return ( 
       <div className="form-container">
           <h2>Electrical Cars Sign Up</h2>
          {err}
        <form className="registration-form" onSubmit={formik.handleSubmit} >
       <fieldset>
       <legend>Create Account</legend>
       
       <label className="form-label" htmlFor="fisrtname ">Firstname</label>
       <input className="form-item" type="text " id="name" name="firstname" 
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.firstname}  />
       {formik.touched.firstname && formik.errors.firstname?<div className="error">{formik.errors.firstname}</div>:null}
     
     <label className="form-label" htmlFor="lastname ">Lastname</label>
       <input className="form-item" type="text " id="lastname" name="lastname" 
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.lastname} />
       {formik.touched.lastname && formik.errors.lastname?<div className="error">{formik.errors.lastname}</div>:null}
   
   
     <label className="form-label" htmlFor="email ">Email</label>
       <input className="form-item" type="text " id="email" name="email"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur} 
       value={formik.values.email} />
       {formik.touched.email && formik.errors.email?<div className="error">{formik.errors.email}</div>:null}
     
     <label className="form-label" htmlFor="username ">Username</label>
       <input className="form-item" type="text " id="username" name="username" 
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.username} />
     {formik.touched.username && formik.errors.username?<div className="error">{formik.errors.username}</div>:null}


     <label className="form-label" htmlFor="contact">Contact</label>
       <input className="form-item" type="text " id="contact" name="contact" 
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.contact} />
     {formik.touched.contact && formik.errors.contact?<div className="error">{formik.errors.contact}</div>:null}

     <label className="form-label" htmlFor="address">Phyiscal Address</label>
       <input className="form-item" type="text " id="address" name="address" 
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.address} />
     {formik.touched.address && formik.errors.address?<div className="error">{formik.errors.address}</div>:null}
     
     <label className="form-label" htmlFor="password">Password</label>
       <input className="form-item" type="password" id="pass" name="password" 
       onChange={formik.handleChange} 
       onBlur={formik.handleBlur}
       value={formik.values.password}/>
     {formik.touched.password && formik.errors.password?<div className="error">{formik.errors.password}</div>:null}
   
     <input type="submit" className="btn-submit" value="Create Account" />

     <p>Already have an account? <Link to="/login">Login In</Link></p>
   
       </fieldset>
      </form>
      {created}
       </div>
     
    
     );
}
 
export default Register;