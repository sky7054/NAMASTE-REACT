//import { Outlet } from "react-router-dom";
import React from "react";
import ProfileFunctionComponent from "./Profile";
//import Profile from "./ProfileClass";
import UserContext from "../utils/UserContext";

// const About = ()=>{
//     return(
//        <div>
//         <h1>This is About Us pages</h1>
//         <p>this is made by Akash Yadav which is worked on it</p>
//         {/* <Outlet/> */}
//         <ProfileFunctionComponent name = {"AkashClass"}/>
//         <Profile name = {"Akash_Yadav"}/>
//        </div>
//     );
// };
class About extends React.Component{
    constructor(props){
        super(props);{
            console.log("parent - constructor");
        }
       
    }

  componentDidMount(){
        console.log("parent - componentDidMount");
    }

    componentDidUpdate(){
        console.log("parent - componentDidUpdate");
    }

    render(){
        console.log("parent - render");
        return(
            <div>
             <h1>This is About Us pages</h1>

            <UserContext.Consumer>
            {
                ({user}) => <h4>{user.name} - {user.Email_id}</h4>
            }
            </UserContext.Consumer>


             <p>this is made by Akash Yadav which is worked on it</p>
             <ProfileFunctionComponent/>
             {/* <Outlet/> */}
             {/* <rofileFunctionComponent name = {"first-child"}/> */}
             {/* <Profile name = {"second-child"}/> */}
            </div>
         );
    }
   
};

export default About;