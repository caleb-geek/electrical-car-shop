import React,{useContext,useEffect} from 'react';
import {ProductContext} from '../../context/ProductContext';
import {useParams} from 'react-router-dom'
import './Order.css'

const OrderProducts = () => {
    const {orders}= useContext(ProductContext)
    const {id} = useParams()

    
  
    const result = orders.ordersData.filter((order)=>{
        return order.id === parseInt(id)
       
       })
       
       
     
       
    return ( 
        <>
      {result.map((item)=>{
          return item.products.map((product)=>{
              return <ul className="order-products" key={product.id}>
                   <h2>{product.id}</h2>
                   <p>{product.name}</p>
                   <img src={product.image} alt={product.name}/>
                   <h3>${product.price}</h3>
              </ul>
          })
      })}
        </>
     );
}
 
export default OrderProducts;
