import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        // create state
        this.state = {
           userInfo:{
            name:"dummy-name",
            location:"dummy-location",
           }
        }
        console.log("child- constructor "+ this.props.name);
    }

//    async componentDidMount(){
//         // API calls
//         const data = await fetch("https://api.github.com/users/sky7054");
//         const json = await data.json();
//         this.setState({
//            userInfo:json,
//         });

//         console.log("child- component Did Mount " + this.props.name);
//     }




      componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("Namaste React OP");
        },1000);

        console.log("Child component did mount");
    };

    componentDidUpdate(){
        console.log("child - component Did Update"+this.props.name);
    }

    componentWillUnmount(){
        // cleaning our code for ex setInterval()
        clearInterval(this.timer);
        console.log("child - component Will Unmount "+this.props.name);
    }


    render(){
        const {count} = this.state  //=> di structuring state
        console.log("child- render " + this.props.name);
        return(
            <div>
            <h2>This is Class Based Component</h2>
            <h3>this is made by Akash Yadav</h3>
            <img src ={this.state.userInfo.avatar_url}></img>
            <h4>Name:{this.state.userInfo.name}</h4>
            <h5>Location:{this.state.userInfo.location}</h5>
            </div>
        );
    };
};

export default Profile;
