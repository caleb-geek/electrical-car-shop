import React ,{useContext,useEffect}from 'react';
import {Link} from 'react-router-dom';
import {ProductContext} from '../../context/ProductContext';
import './Cart.css';

const Cart = () => {

    const {cart,reduction,increase,removeProduct,total,getTotal}= useContext(ProductContext)
    const {cartItems} = cart
    
    useEffect(()=> {
        getTotal()
       },[total])
 
   
    if(cartItems.length === 0) {
       return <h1 className="h-item">No products are in the cart</h1>
    }else{
        return ( 
            <div className="container">
                {cartItems.map((item)=>(
                    <div className="details" key={item.id}>
                     <img src={item.image} alt={item.name}/>
                       <div className="box">
                           <div className="row">
                               <h2>{item.name}</h2>
                               <span>${item.price}</span>
                           </div>
                           <p>{item.tag}</p>
                           <p>{item.details}</p>
                           <div className="amount">
                               <button className="count" onClick={()=>reduction(item.id)}>-</button>
                               <span>{item.count}</span>
                               <button className="count"onClick={()=>increase(item.id)}>+</button>
    
                           </div>
                       </div>
                          <div className="delete" onClick={()=>removeProduct(item.id)}>X</div>
                    </div>
                ))}
                <div className="total">
                   <Link className="btn-checkout" to="/payment">Checkout</Link>
                   <h1>Total Amount:{total}</h1>
                </div>
            </div>
         );
    }
    
}

 
export default Cart;