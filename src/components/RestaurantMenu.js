import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { swiggy_menu_api_URL } from "./constants";
const RestaurantMenu = () =>{
    const {id} = useParams();
    
   const[restaurants,setRestaurants] = useState();

   useEffect(() =>{
    getRestaurantInfo();
   },[]);

   async function getRestaurantInfo() {
    const response = await fetch(swiggy_menu_api_URL);
    const json = await response.json();
    console.log(json.data);
    setRestaurants(json.response);
   }

   

    return (
        <div>
            <h1>Restaurant:id {id}</h1>
            <h2>Namaste restaurant</h2>
            
        </div>
    );
};

export default RestaurantMenu;