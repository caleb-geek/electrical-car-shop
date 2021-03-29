import  React ,{createContext,useState,useReducer,useEffect} from 'react';
import axios from 'axios';
export const ProductContext = createContext();

// ADD_USER
// UPDATE PROFILE
// GET_USER
// LOGIN
const intialstate = {
  isLoading:false,
  data:[],
  err:''
  }



const reducer = (state, action) => {
switch(action.type) {
  case "FETCH_SUCCESS":
    return {
      isLoading:false,
      data:action.payload,
      err:''
    }
  case "IS_LOADING":
    return {
      isLoading:true,
      data:[],
      err:''
    }
  case "FETCH_ERROR":
    return {
      isLoading:false,
      data:[],
      err:action.err
    }
    default:
      return state
}
}
const ProductContextProvider = (props) => {
  
  const [state, dispatch] =useReducer(reducer,intialstate);
  const [cart,setCart] = useState({cartItems:[]})
  const [total,setTotal] = useState(0)
  const [orders,setOrders] = useState({ordersData:[]})

   
  
//Adding to the cart
  const addCart = (id) => {
    const {data} = state
    const cartData = cart.cartItems

    const check = cartData.every((item)=>{
      return item.id !== parseInt(id)
    })
    if(check){
      const result = data.filter((product)=>{
        return product.id === parseInt(id)
      })
      setCart({cartItems:[...cartData,...result]})
    }else{
     alert("The product has been added the cart")
    }

     }

     //Reduce items count
     const reduction = (id) => {
      const cartData = cart.cartItems
      cartData.forEach((item)=>{
       if(item.id  === id) {
       item.count === 1 ? item.count=1 :item.count-=1
       }
     })
      setCart({cartItems:cartData})
      getTotal()
     }

      //Increase items count
      const increase = (id) => {
        const cartData = cart.cartItems
      cartData.forEach((item)=>{
       if(item.id  === id) {
       item.count +=1
       }
     })
      setCart({cartItems:cartData})
      getTotal()
       }

       //Remove product
       const removeProduct = (id) => {
         if(window.confirm("Do you want to remove product?")){
          const cartData = cart.cartItems
        cartData.forEach((item,index)=>{
         if(item.id === id) {
         cartData.splice(index,1)
         }
       })
        setCart({cartItems:cartData})
        getTotal()
         }
       }
       //Cart total

       const getTotal = () => {
        const cartData = cart.cartItems
        const result = cartData.reduce((prev,item)=>{
          return prev + (parseInt(item.price) * item.count)
        },0)
        setTotal(result)
       }
      
       //Add to local storage
       useEffect(()=> {
        fetch('http://127.0.0.1:5000/api/product')
        .then((response)=> response.json())
        .then((data) => {
          return dispatch({type:'FETCH_SUCCESS',payload:data})
        })
        .catch((err)=>{
          return dispatch({type:'FETCH_ERROR',err:err})
        })
      },[])
      
      //  useEffect(()=> {
      //   const dataCart = JSON.parse(localStorage.getItem('dataCart'))
      //   if(dataCart !==null){
      //    setCart({cartItems:dataCart})
      //   }
      //   const dataTotal = JSON.parse(localStorage.getItem('dataTotal'))
      //   if(dataTotal !==null){
      //    setCart(dataTotal)
      //   }
        
      // },[total,cart.cartData])
      
      
       
      //  useEffect(()=> {
      //   localStorage.setItem('dataCart',JSON.stringify(cart.cartItems))
      //   localStorage.setItem('dataTotal',JSON.stringify(total))
      // },[])

     
     
      
      
      
    
      useEffect( ()=>{
          axios.get(`http://127.0.0.1:5000/api/order`)
          .then((result)=>{
            setOrders({ordersData:result.data})
              //setPhoto(result.data.image)
          })
      },[]);
      
    

     
       
  return (
    <ProductContext.Provider value ={{state,addCart,cart,reduction,increase,removeProduct,total,getTotal,orders}}>
      {props.children}
    </ProductContext.Provider>
    );
}
 
export default ProductContextProvider ;