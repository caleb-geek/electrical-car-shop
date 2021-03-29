
import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {ProductContext} from '../../context/ProductContext';
import './Products.css'



const Product = () => {
  const {state,addCart}= useContext(ProductContext)
  const {data} = state
  
 
return ( 
  <>
  <h2 className="heading">Our Cars</h2>
  <div id="product">
   
     {data.map((item)=>(
         <div className="card">
             <Link to={`/product/${item.id}`} key={item.id}>
             <img src={item.image} alt={item.name}/>
           </Link> 
           
            <h2>
                <Link to={`/product/${item.id}`}>{item.name}</Link>
            </h2>
            <p>${item.price}</p>
            <p>{item.tag}</p>
            <button className="cart-btn" onClick={()=>addCart(item.id)}>Add to Cart</button>

         </div>
        
       
     ))}

  </div>
  </>
   );
}
 
export default Product;