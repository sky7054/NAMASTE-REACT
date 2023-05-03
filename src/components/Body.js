import { restaurantList, swiggy_api_URL } from "./constants";
import RestaurantCard from "../RestaurantCard";
import { useState,useEffect} from "react";
import Shimmer from "./Shimmer";

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
  
  useEffect(()=>{
  getRestaurants();
  },[]);
 
  
  async function getRestaurants(){
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();
    console.log(json);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  console.log("render");
  // Conditional Rendering
  // if restaurant is empty => shimmer UI
  // if restaurant has data => actual data UI
  console.log("render");

  // not render components(Early Return)
  if(!allRestaurants) return null;

  if(filteredRestaurants?.length === 0) return <h1>No Restaurant match your filter!</h1>;


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
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;


 