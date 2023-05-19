import { useContext } from "react";
import { IMG_CDN_URL } from "./constants";
import UserContext from "../utils/UserContext";

 const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoString,
  }) => {
    const {user} = useContext(UserContext);
    return (
      <div className="card">
        
        <img src={IMG_CDN_URL + cloudinaryImageId}/>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>price : {costForTwoString}</h4>
        <h4>{user.name} - {user.Email_id}</h4>
       
      </div>
    );
  };

  export default RestaurantCard;
  