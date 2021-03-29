import React,{useContext,useEffect,useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {ProductContext} from '../../context/ProductContext';


const ProductDetails = (props) => {
    const {state,addCart}= useContext(ProductContext)
    const [product,setProduct]=useState({productItem:[]})
    const {data} = state
    const {id} = useParams()
    
    useEffect(()=>{
        if(id) {
            const result = data.filter((item)=>{
                return item.id === parseInt(id);
            })
            setProduct({productItem:result})
        }

    }, [data])
    
    return ( 
        <>
            {product.productItem.map((item)=>(
                <div className="details" key={item.id}>
                 <img src={item.image} alt={item.name}/>
                   <div className="box">
                       <div className="row">
                           <h2>{item.name}</h2>
                           <span>${item.price}</span>
                       </div>
                       <p>{item.tag}</p>
                       <p>{item.details}</p>
                       <Link className="cart" to="/cart" onClick={()=> addCart(item.id)}>Add to Cart</Link>
                   </div>
                </div>
            ))}
        </>
     );
}
 
export default ProductDetails;