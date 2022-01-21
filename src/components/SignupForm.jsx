import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/login.css"
export const Signup = () => {
    const [email, setEmail] = useState("")
    const[last, setLast]=useState("")
    const [name,setName]=useState("");
    //const [name,setName]=useState("");
    const [password, setPassword] = useState("")
  return (
        <div>
            <div>
                <img style={{ width: "55%", height: "40%", float: "left" }} src={require("./images/Screenshot (417).png")}></img>
            </div>
           
            <div className="login">
            
                <h4>Join Twitter today.</h4>
                <input type="text" name="Name" value={name} placeholder="Name " onChange={(e) => { setName(e.target.value) }}></input>
                <br></br>
                <input type="text" name="last" value={last} placeholder="Last Name" onChange={(e) => { setLast(e.target.value) }}></input>
                <br></br>
                <input type="email" name="email" value={email} placeholder="email" onChange={(e) => { setEmail(e.target.value) }}></input>
                <br></br>
                <input type="password" name="password" value={password}placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}></input>
                <br></br>
                <button  >Signup</button>
                <br></br>
                <Link to="/"> <button>Back to login</button></Link> 
            </div>
        </div>
       
    )
}