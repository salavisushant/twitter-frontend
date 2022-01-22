import React, {useContext, useEffect, useState } from "react";
import { Outlet, Link,useNavigate } from "react-router-dom";
import "../components/login.css"
import {AuthContext} from "../contexts/AuthContextProvider"
export const Login = () => {
    const [form,setForm] = useState({})
    const{token, handleToken} = useContext(AuthContext)

    const handleChange = ({target:{name,value}})=>{
        setForm({
            ...form,
            [name]:value
        })
        console.log(form)
    }

    const navigate = useNavigate()
  return (
        <div>
            <div>
                <img style={{ width: "55%", height: "40%", float: "left" }} src={require("./images/Screenshot (417).png")} alt="image" />
            </div>
           
            <div className="loginjaswanth">
            
            <h1>Happening now</h1>
                <h4>Join Twitter today.</h4>
                <input placeholder="Email"
              type="email"
              name="email"
              required
             
              onChange={handleChange}
            />
            <br></br>
            <input
              placeholder="Password"
              type="password"
              name="password"
              required
              minLength="6"
            
              onChange={handleChange}
            />
              <br></br>
            <button onClick={()=>{
              fetch("https://twitter-backend1.herokuapp.com/login",{
                method:"POST",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(form)
              })
              .then(res => res.json())
              .then(res => {if(res.status == "passed"){
                handleToken(res)
                navigate("/home")
              }else{
                alert("wrong login details")
              }})
            }}>Login</button>
              <br></br>
            <button  onClick={()=>{navigate("/singnup")}}>Sign Up</button>
            </div>
        </div>
       
    )
}