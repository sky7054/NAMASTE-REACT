import { useState,useContext } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const loggedInUser = () =>{
  return false;
};


const Title = () => (
    <Link to="/">
      <img
        className="logo"
        alt="logo"
        src= {Logo}
      />
    </Link>
  );
  
  const Header = () => {

    const[isLoggedIn,setIsLoggedIn] = useState(true);

    const { user } = useContext(UserContext);

    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
           <Link to ="/"><li>Home</li></Link> 
           <Link to ="/about"> <li>About</li></Link>
           <Link to = "/contact"><li>Contact</li></Link> 
           <Link to = "/instaMart"><li>InstaMart</li></Link>
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