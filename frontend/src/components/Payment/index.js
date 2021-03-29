import React,{useState,useContext} from 'react';
//import {getUser} from '../utils/common'
//import {getToken} from '../utils/common'
import {ProductContext} from '../../context/ProductContext';
import './Payment.css';

import axios from 'axios';

const Payment = (props) => {
  const {total,cart}= useContext(ProductContext)
  const [location,setLocation] = useState('')
  const [success,setSucess] = useState('')
  const [error,setError] = useState('')
  const [isloggedIn,setisloggedIn] = useState(false)
  

  const handleChange = (e)=> {
    setLocation( e.target.value);
  }

  const handleSubmit = (e)=> {
   

   const result = cart.cartItems.map((item) =>{
     return {id:item.id}
   })

   const data = {location:location,amount:total,products:result}
   
   //const formData = JSON.stringify(data)
   //console.log(formData)
    axios.post(`http://127.0.0.1:5000/api/order`,data)
          .then(() => {
            setSucess("Your order has been placed successfully")
            setisloggedIn(true)
            }).catch((err)=>{
              setError("Your could not be place please retry")
            
        })
    
    e.preventDefault();
   }
    let result ;
    if(isloggedIn){
      result = <h3>{success}</h3>
    }


    return ( 
       <div className="form-container">
         <h1>Submit your Order</h1>
        <form className="order-form" onSubmit={handleSubmit}>
        <label>
          Address:
          <input type="text" value={location} onChange={handleChange} placeholder="Enter your physical address" />
        </label>
        {cart.cartItems.map((item)=>{
          return <div className="items" key={item.id}>
           <h3>{item.name}</h3>
           <img src={item.image} alt={item.name}/>
           
          </div>
        })}
        <h2> Total amount:{total}</h2>
        <input className="btn-submit" type="submit" value="Submit Order" />
      </form>
      {result }
       </div>
     
    
     );
}
 
export default Payment;