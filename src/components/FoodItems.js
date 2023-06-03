import { IMG_CDN_URL } from "./constants";


 const FoodItems = ({name, description, cloudinaryImageId}) => {

    return (
      <div className="card">
        
        <img src={IMG_CDN_URL + cloudinaryImageId}/>
        <h2>{name}</h2>
       <h3>{description}</h3>
       
      </div>
    );
  };

  export default FoodItems;
  