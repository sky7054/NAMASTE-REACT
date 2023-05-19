import { useContext } from "react";
import UserContext from "../utils/UserContext";


const Footer = () =>{
    const {user} = useContext(UserContext);
    return <h4>This site is develop by {user.name} - {user.Email_id}</h4>;
};

export default Footer;