//import { Outlet } from "react-router-dom";
import ProfileFunctionComponent from "./Profile";
import Profile from "./ProfileClass";

const About = ()=>{
    return(
       <div>
        <h1>This is About Us pages</h1>
        <p>this is made by Akash Yadav which is worked on it</p>
        {/* <Outlet/> */}
        <ProfileFunctionComponent name = {"AkashClass"}/>
        <Profile name = {"Akash_Yadav"}/>
       </div>
    );
};

export default About;