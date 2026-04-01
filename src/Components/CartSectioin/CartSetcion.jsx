import { toast } from "react-toastify";
import Carts from "./Carts";

const CartSetcion = ({ cart ,setCart }) => {
  console.log(cart);
  
  let total = cart.reduce((sum,item)=> sum+ item.price, 0)
  const totalFilter =(id)=>{
     setCart(cart.filter(( i,index)=> index!== id))
     toast.error("Item removed from cart")
  }
  const checkout = (id)=>{
    if(cart.length>0){

      setCart(cart.filter((item)=> item.name === id ))
      toast.success("oder placed successfull")
      return
    }
    toast.warning("add item to cart first")

  }
  console.log(cart.length);
  

  return (
    <div className="max-w-1/2 mx-auto shadow-2xl p-10 space-y-5">
{     cart.length!==0? <Carts cart={cart} setCart={setCart} totalFilter={totalFilter}></Carts>: <div>
    <h2>No products in the cart </h2>
    </div>}
      <div className="flex items-center justify-between">
        <h2>Total:</h2>
        <span>${total} </span>
      </div>
      <button onClick={()=>{checkout(cart.name)}} className="btn w-full rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Proceed to Checkout</button>
    </div>
  );
};

export default CartSetcion;
