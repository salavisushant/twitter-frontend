import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../components/login.css"
export const UserAuth = () => {
    const [email, setEmail] = useState("")
   
    const [password, setPassword] = useState("")
    const signup =async()=>{
        console.log("a")
     var user= await fetch(`http://localhost:2233/login/:${email}/:${password}`)
        console.log(user)
        
    }
  return (
        <div>
            <div>
                <img style={{ width: "55%", height: "40%", float: "left" }} src={require("./images/Screenshot (417).png")} alt="image" />
            </div>
           
            <div className="login">
            
            <h1>Happening now</h1>
                <h4>Join Twitter today.</h4>
                <input type="email" name="email" value={email}  onChange={(e) => { setEmail(e.target.value) }}></input>
                <br></br>
                <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                <br></br>
                <button  onClick={signup} >login</button>
                <br></br>
                <p>or</p>
               
                <Link to="/signup"><button >signup</button></Link> 
            </div>
        </div>
       
    )
}