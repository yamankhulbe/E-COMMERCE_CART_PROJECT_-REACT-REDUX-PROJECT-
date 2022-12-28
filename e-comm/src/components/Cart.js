import { useSelector } from "react-redux"
import {Link} from "react-router-dom"



const Cart = () => {
    const cartData = useSelector((state) => state.cartData);

    let amount = cartData.length && cartData.map(item=>item.price)
    let totalAmount = amount.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue
    })

    console.warn("amount" , totalAmount)
    console.log("data of cart" , cartData)
  return (
    <>
    <Link to="/">Product List</Link>
    <h1>Cart</h1>
    <div className="cart-page-container" >
        <table>
            <thead>
            <tr>
                <td>Product</td>
                <td>Name</td>
                <td>Color</td>
                <td>Price</td>
                <td>Brand</td>
                <td>Category</td>
            </tr>
            </thead>
           <tbody>
           {
                cartData.map((item)=>
                <tr key={item.id}>
               <td> <img src={item.photo} style={{width: "128px" , height: "78px"}}  alt="" /></td>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.price}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
            </tr>
                 )
            }

           </tbody>
           
        </table>
        <div className="price-details">
                <div className="adjust-price"><span>Amount</span><span>+{totalAmount}</span></div>
                <div className="adjust-price"><span>Discount</span><span>-{0.10*totalAmount}</span></div>
                <div className="adjust-price"><span>Delivery</span><span>+{50}</span></div>
                <div className="final-price"><span>Total</span><span>{totalAmount +50 - (0.10*totalAmount)}</span></div>

            </div>
    </div>
      
    </>
  )
}

export default Cart
