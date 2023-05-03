import { useState } from "react";

const loggedInUser = () =>{
  return false;
};


const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"
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