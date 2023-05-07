import {useState} from "react";
const Profile = (props) => {
    const[count,setCount] = useState(0);
    const[Count2,setCount2] = useState(0);

    return( 
        <div>
            <h1>This is Profile Page</h1>
            <h3>name:{props.name}</h3>
            <h4>Count:{count}</h4>
            <h5>Count2:{Count2}</h5>
            <button onClick={() => {
                if(count == 0){
                    setCount(1);
                    setCount2(1);
                }
                else{
                    setCount(0);
                    setCount2(0);
                }
            }}>Count</button>
        </div>
    );
};

export default Profile;
