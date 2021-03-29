import React,{useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import {removeUserSession} from '../../utils/common'
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {ProductContext} from '../../context/ProductContext';



const Navbar = ({user}) => {
    const [open, setOpen] = useState(false)
    const {cart}= useContext(ProductContext)
    const {cartItems} = cart

    const handleclick = ()=> {
        setOpen(!open)
        }

    const handlogout = (e) => {
            e.preventDefault();
            removeUserSession()
            window.location.reload(); 
        
        }

    let button;
    if(user) {
    button = <Link  onClick={handlogout} className="menu-item"><a href="#">Logout</a></Link>
    }else {
        button = (
            <ul>
           <Link to='/register' className="menu-item"><a href="#">Register</a></Link>
            <Link to='/login' className="menu-item"><a href="#">Login</a></Link>

            </ul>
           
        )
    }


    return ( 
        <div className="navbar_container">
             <div className="logo">Electrical Cars</div>
             <div className="space"></div>
             <ul className="menubar" style={{transform:open ? "translateY(-500px)":"translateY(0px)"}}>
                 <Link to='/' className="menu-item"><a href="#">Home</a></Link>
                 <Link  to='/product'className="menu-item"><a href="#">Products</a></Link>
                 <Link  to='/admin'className="menu-item"><a href="#">Admin</a></Link>
                 <Link to='/cart' className="menu-item"><a href="#">Cart[{cartItems.length}]</a></Link>
                 
                 {button}
                
                 
             </ul>
             <MenuIcon onClick={handleclick} className="hamberger"  />
             
        </div>
     );
}
 
export default Navbar;