

import { addToCart, emptyCart, removeFromCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


function Main() {
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.productData);
  console.warn("main component data from saga" , data)



  useEffect(()=>{
    dispatch(productList())
  },[])


  return (
  <>
    <div className='buttons-main'>
      
      
      <button  onClick={()=>{dispatch(emptyCart())}}>Empty cart </button>

    </div>

    <div className='product-container'>
      {
        data.map((item)=><div key={item.id} className='product-item'>
        <img src={item.photo} alt="" />
        <div>Name : {item.name} </div>
        <div>Color : {item.color} </div>
        <div>Price : {item.price} </div>
        <div>Category : {item.category} </div>
        <div>Brand : {item.brand} </div>
        <div>
              <button onClick={()=>{dispatch(addToCart(item))}}>Add to Cart</button><br>
              </br>
              <button onClick={()=>{dispatch(removeFromCart(item.id))}}>Remove to Cart</button>

              </div>
        
      </div>)

      }
    </div>

   
  
    </>
  )
}

export default Main;
