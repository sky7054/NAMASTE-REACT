import {useEffect, useState} from "react";
const Profile = (props) => {
    const[count,setCount] = useState(0);
    const[Count2,setCount2] = useState(0);
    const[userInfo,setUserInfo] = useState([]);

    useEffect(()=>{
      const timer =   setInterval(()=>{
            console.log("hello world");
        },1000);

        return () =>{
            clearInterval(timer);
            console.log("useEffect Return");
        }
       getUserInfo();
    },[]);

    async function getUserInfo(){
        const data = await fetch("https://api.github.com/users/sky7054");
        const json = await data.json();
        setUserInfo(json);
    }

    return( 
        <div>
            <h1>This is Profile Page</h1>
            <img src = {userInfo.avatar_url}></img>
            <h3>name:{userInfo.name}</h3>
            <h4>Location:{userInfo.location}</h4>
        </div>
    );
};

export default Profile;
