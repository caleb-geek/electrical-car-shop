
import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {ProductContext} from '../../context/ProductContext';
import './AllProducts.css'
import AllProductsTableRow from './AllProductsTableRow';




const AllProducts= () => {
  const {state,addCart}= useContext(ProductContext)
  const {data} = state
  
 
return ( 
  <div className="allproducts">
  <h1>All Products</h1>
  <table>
  <tr>
    <th>Id</th>
    <th>Title</th>
    <th>Price</th>
    <th>Tag</th>
    <th>Details</th>
    <th>Photo</th>
  </tr>
<AllProductsTableRow/>
</table>

  
  </div>
   );
}
 
export default AllProducts;