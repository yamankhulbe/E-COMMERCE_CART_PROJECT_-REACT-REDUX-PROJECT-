import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { searchProduct } from "../redux/productAction"



const Header = () => {
  const result = useSelector((state)=>state.cartData)
  const dispatch = useDispatch()
  console.warn("redux header data" , result)
  return (
    <div className="header">
    <Link to='/'><h1 className="logo">APNI DUKAAN</h1></Link>  
    <div className='search-box'>
    <input type="text" onChange={(event) => dispatch(searchProduct(event.target.value))} placeholder='Search Product' />
      </div>
      <Link to="/cart">
      <div className="cart-div">
            <span>{result.length}</span>
            <img src = "./images/cart.jpg " alt=" "/>
        </div>
      </Link>
        
    </div>
  )
}

export default Header
