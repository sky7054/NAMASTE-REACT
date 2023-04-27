const RestaurantCard = () =>{
    return(
        <div className="card">
            <img 
            src="https://b.zmtcdn.com/data/pictures/9/18469259/53f9af024eb7b70be4fc340d80fa70ac_o2_featured_v2.jpg?output-format=webp"
            />
            <h3>Rajasthani Rasoi</h3>
            <h4>Rajasthani, North india</h4>
            <h5>4.2 starts</h5>

        </div>
    );
}


const Body = () =>{
    return(
     <div className="RestaurentList">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
     </div>
    );
 };

 export default Body;