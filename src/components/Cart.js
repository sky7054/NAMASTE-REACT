import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/cartSlice";
const Cart = () =>{

    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return(
        <div>
             <h1>CartItems - {cartItems.length}</h1>,
             <button className="Clear-btn" onClick={() =>handleClearCart()}>
                     Clear-Cart
                </button>,
            <div>
                    {cartItems.map((items) =>(
                        <FoodItems key={items} {...cartItems[0]} />
                     ))}
       

                </div>
            </div>    
    );
};

export default Cart;