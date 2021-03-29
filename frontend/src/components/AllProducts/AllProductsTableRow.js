import React,{useContext,useState} from 'react';
import {ProductContext} from '../../context/ProductContext';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './AllProducts.css'
import {Link, Redirect,useParams} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'
import axios from 'axios';


const AllProductsTableRow = () => {
const {state,addCart}= useContext(ProductContext)
const {data} = state

const [deleted,setDeleted] = useState(false)
const handlesubmit = (id,e) => {
  
  confirmAlert({
    title: 'Confirm',
    message: 'Are you sure you want to delete?',
    buttons: [
      {
        label: 'Delete',
        onClick: () => {
          axios.delete (`http://localhost:5000/api/product/${id}`)
            .then((response) => {
              setDeleted(true)
          }).catch((err)=>{
             console.log(err)
          })
        }
      },
      {
        label: 'Cancel',
        onClick: () =>  <Redirect to={'/admin'}/>
      }
    ]
  })
};

if(deleted){
return<Redirect to={'/allproducts'}/>
}

  
    return ( 
        <>
        {data.map((item)=>(
            <tr key={item.id}>
               <td>{item.id}</td>
               <td>{item.name}</td>
               <td>{item.price}</td>
               <td>{item.tag}</td>
               <td>{item.details}</td>
               <td><img src={item.image} alt={item.name}/></td>
               <td><Link to= {`editproduct/${item.id}`}><EditIcon className="edit-btn"/></Link></td>
               <td><Link onClick={(e) => handlesubmit(item.id, e)} to=""><DeleteIcon className="delete-btn"/></Link></td>
               
            </tr>
        ))}
        </>
     );
}
 
export default AllProductsTableRow;