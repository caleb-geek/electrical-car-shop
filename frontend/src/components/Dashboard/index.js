import React from 'react';
import {BrowserRouter, Switch, Route, Redirect,Link} from 'react-router-dom';
import './Dashboard.css';
import AllProducts from '../AllProducts';
import EditProduct from '../EditProduct';
import AddProduct from '../AddProduct';
import Orders from '../Orders';
import OrderProducts from '../Orders/OrderProducts';
import PrivateRoute from "../../utils/PrivateRoute"

const Dashboard = () => {
    return ( 
        <>
        <BrowserRouter>
        
        <div className="dashboard">
             <h2>Welcome to the cars dashboard</h2>
             <ul className="dashboard-menu" >
                <Link  to='/allproducts'className="menu-item"><a href="#">All Products</a></Link>
                <Link  to='/addproduct'className="menu-item"><a href="#">Add product</a></Link>
                 <Link to='/orders' className="menu-item"><a href="#">Orders</a></Link>
                 
                
                    
            </ul>
            <Switch>
            <PrivateRoute exact path="/admin" component={AllProducts} />
            <PrivateRoute exact path="/allproducts" component={AllProducts} />
            <PrivateRoute exact path="/editproduct/:id" component={EditProduct} />
            <PrivateRoute exact path="/addproduct" component={AddProduct} />
            <PrivateRoute exact path="/orders" component={Orders} />
            <PrivateRoute exact path="/orderproducts/:id" component={OrderProducts} />
            
          
            
            
            </Switch>
            
             
             
        </div>
        </BrowserRouter>
        </>
     );
}
 
export default Dashboard;