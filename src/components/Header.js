import { useState } from "react";
import Logo from "../assets/img/foodvilla.png";


const loggedInUser = () =>{
  return false;
};


const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src= {Logo}
      />
    </a>
  );
  
  const Header = () => {

    const[isLoggedIn,setIsLoggedIn] = useState(true);
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
        {
          (isLoggedIn? 
          <button onClick={() =>{ setIsLoggedIn(false)}}>logOut</button> :
            <button onClick={() =>{ setIsLoggedIn(true)}}>logIn</button>)
        }
      </div>
    );
  };

  export default Header;