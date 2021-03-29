import React,{useContext} from 'react';
import { Link } from 'react-router-dom';


const AllProductsTableRow = (props) => {

    return ( 
        <>
         {props.orders.ordersData.map((order)=>(
            <tr key={order.id}>
               <td>{order.id}</td>
               <td>{order.amount}</td>
               <td>{order.location}</td>
               <td><Link to={`orderproducts/${order.id}`}>view order items</Link></td>
                   
            </tr>
        ))} 
        </>
     );
}
 
export default AllProductsTableRow;