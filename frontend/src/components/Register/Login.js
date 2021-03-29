import React,{useState} from 'react';
import {Link, Redirect} from 'react-router-dom'
import  {setUserSession}  from '../../utils/common';
import './Login.css'
import './Register.css'
import {useFormik} from 'formik';
import axios from 'axios'

const Login = (props) => {
const [isloggedIn,setisloggedIn] = useState(false)
const [error,setError] = useState("")
    const formik = useFormik({
        initialValues:{
            username:'',
            password:''
        },
        onSubmit:values => {
             axios.post ('http://localhost:5000/api/user/login', values)
              .then((response) => {
                console.log("Sucess:",response.data.userId)
                let token = response.data.token
                let user = response.data.userId
                console.log(response.data)
                setUserSession(token, user);
                setisloggedIn(true)
                props.userInfo(user)
              }).catch((err)=>{
                  console.log(err)
                setError({message:err.response.data.message})
            })
        },
        validate:values => {
            let errors = {}
            if(!values.username){
                errors.username = "Required*"
            }
            if(!values.password){
                errors.password = "Required*"
            }


            return errors
        }
    })

    if(isloggedIn){
        return <Redirect to={'/'}/>
    }
    let err = ""
    if(error.message){
     err = (
         <div className="login-error">
             {error.message}
         </div>
     )
    }
    return ( 
        <div className="form-container">
           <h2>Electrical Cars Sign In</h2>
          {err}
        <form className="registration-form" onSubmit={formik.handleSubmit} >
       <fieldset>
       <legend>Account Login</legend>
     
       <label className="form-label" htmlFor="username ">Username</label>
       <input className="form-item" type="text " id="username" name="username" 
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.username} />
     {formik.touched.username && formik.errors.username?<div className="error">{formik.errors.username}</div>:null}
     
     <label className="form-label" htmlFor="password ">Password</label>
       <input className="form-item"   type="password" id="pass" name="password" 
       onChange={formik.handleChange} 
       onBlur={formik.handleBlur}
       value={formik.values.password}/>
     {formik.touched.password && formik.errors.password?<div className="error">{formik.errors.password}</div>:null}
     
   
     <input type="submit" className="btn-submit" value="Sign In" />

     <p>New on Electrical Cars?</p>
     <Link to="/register" className="btn-reg">Create your Account</Link>
   
       </fieldset>
      </form>
       </div>
     );
}
 
export default Login;