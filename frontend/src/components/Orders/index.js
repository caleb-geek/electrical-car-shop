import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import './Order.css'
import AllOrdersTableRow from './AllOrdersTableRow';
import {ProductContext} from '../../context/ProductContext';





const AllOrders= () => {
  const {orders}= useContext(ProductContext)
  //console.log(orders)

 
return ( 
  <div className="allproducts">
  <h1>All Orders</h1>
  <table>
  <tr>
    <th>Id</th>
    <th>Amount</th>
    <th>Location</th>
    <th>Products</th>
    
  </tr>
<AllOrdersTableRow orders={orders}/> 
</table>

  
  </div>
   );
}
 
export default AllOrders;