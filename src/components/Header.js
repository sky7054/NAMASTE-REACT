import { useState,useContext } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const loggedInUser = () =>{
  return false;
};


const Title = () => (
    <Link to="/">
      <img
      data-testId = "logoId"
        className="logo"
        alt="logo"
        src= {Logo}
      />
    </Link>
  );
  
  const Header = () => {

    const[isLoggedIn,setIsLoggedIn] = useState(true);

    const { user } = useContext(UserContext);

    const cartItems = useSelector(store =>store.cart.items);
    console.log(cartItems);

    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
           <Link to ="/"><li>Home</li></Link> 
           <Link to ="/about"> <li className="nav-items-p">About</li></Link>
           <Link to = "/contact"><li className="nav-items-p">Contact</li></Link> 
           <Link to = "/instaMart"><li className="nav-items-p">InstaMart</li></Link>
           <Link to = "/Cart"><li className="nav-items-p" data-testId="cart">Cart- {cartItems.length} items</li></Link> 
          </ul>
        </div>
        {user.name}
        {(isLoggedIn? 
          <button onClick={() =>{ setIsLoggedIn(false)}}>logOut</button> :
            <button onClick={() =>{ setIsLoggedIn(true)}}>logIn</button>)

           
        }
      </div>
    );
  };

  export default Header;