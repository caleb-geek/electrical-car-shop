import React,{useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {getUser,removeUserSession,getToken} from "./utils/common"
import Navbar from './components/Navbar';
import ProductContextProvider from './context/ProductContext';
import Product from './components/Products';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Register/Login';
import axios from 'axios';
import PrivateRoute from "./utils/PrivateRoute"


function App() {

  const [user,setUser] = useState(null)
 
// const user = getUser()
console.log("tk:",getToken())
 //s console.log("test",suer)
  useEffect(()=>{
   
    if(!getUser()){
       return;
     }
    const AuthStr = 'Bearer '.concat(getToken()); 
      
    axios.get(`http://127.0.0.1:5000/api/user/1`,{ headers: { Authorization: AuthStr } } )
    .then((response)=>{
     // setUser(response.data)
     userInfo(response.data)
    
  }).catch((err)=>{
    console.log("errs")
  })
},[]);

const userInfo = (user) => {
  return setUser({"user":user})
}
  return (
    <div className="App">
      <BrowserRouter>
      <ProductContextProvider>
      <Navbar  user={user}/>
      <Switch>
        <Route exact path="/"component={Product }/>
        
        <Route exact path="/product" component={Product} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/cart" component={Cart} />
        <PrivateRoute exact path="/payment" component={Payment} />
        <PrivateRoute exact path="/admin" component={Dashboard} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={() => <Login userInfo={userInfo}/>} />
        
        
        
        
        
        
        
        
        
        </Switch>
      </ProductContextProvider>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
