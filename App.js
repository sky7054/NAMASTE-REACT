import React from "react";
import ReactDOM from "react-dom/client";
{
  /***
   * Header
   *  -logo
   *
   *
   *
   *
   *
   *
   *
   * ***/
}

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
    </div>
  );
};

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

const Footer = () =>{
    return <h4>Footer</h4>;
};

const AppLayout = () =>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

