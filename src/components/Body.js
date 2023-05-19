import { restaurantList, swiggy_api_URL } from "./constants";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const[allRestaurants,setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const {user,setUser} = useContext(UserContext);


  useEffect(()=>{
  getRestaurants();
  },[]);
 
  
  async function getRestaurants(){
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if(!isOnline){
   return alert("🙄Oops! No internet conection");
  }

  // Conditional Rendering
  // if restaurant is empty => shimmer UI
  // if restaurant has data => actual data UI

  // not render components(Early Return)
  if(!allRestaurants) return null;




  return (allRestaurants?.length === 0) ? (<Shimmer/>) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
       
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state of restaurants list
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input value={user.name} onChange={ e=>setUser({
          ...user,
          name:e.target.value,
        })
        }></input>

<input value={user.Email_id} onChange={ e=>setUser({
          ...user,
          Email_id:e.target.value,
        })
        }></input>

      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
          );
        })}
      </div>
    </>
  );
};

export default Body;


 