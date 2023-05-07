import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        // create state
        this.state = {
            Count:0,
            Count2:1,
        }
    }
    render(){
        const {count} = this.state  //=> di structuring state
        return(
            <div>
            <h2>This is Class Based Component</h2>
            <h3>this is made by Akash Yadav</h3>
            <h4>Name:{this.props.name}</h4>
            <h5>Count:{this.state.Count}</h5>
            <h6>Count:{this.state.Count2}</h6>
            <button onClick={()=>{
                // WE DO NOT MUTATE STATE DIRECTLY
                //Never do this.state => something
                this.setState({
                   Count:1,
                   Count2:2,
                })
            }}>SetCount</button>
            </div>
        );
    };
};

export default Profile;
