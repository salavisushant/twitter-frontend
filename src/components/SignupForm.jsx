import React, { useEffect, useState } from "react";
import { useContext, useRef } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";
import { Link } from "react-router-dom";
import "../components/login.css"
import { useNavigate } from "react-router-dom"
export const Signup = () => {
    const userName = useRef()
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const{token, handleToken} = useContext(AuthContext)
  const navigate = useNavigate()

  
    const handleClick = async (e) => {
      e.preventDefault();
      console.log(passwordAgain.current.value, password.current.value)
      if (passwordAgain.current.value !== password.current.value) {
        alert("Passwords don't match!");
      } else {
        const user = {
          username:userName.current.value,
          name: name.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        console.log(user)
        fetch("https://twitter-backend1.herokuapp.com/register", {
          method: "POST",
          body: JSON.stringify(user),
          headers: { "content-type": "application/json" }
        }).then((res) => 
          res.json()
        ).then((res) =>  {
          if(res.status == "passed"){
          handleToken(res)
          navigate("/home")
        }else if(res.message == " Please provide a different email address"){
          alert("Please provide a different email address")
        }else{
          alert("Enter correct details")
        }})
        //.catch((e) => {
        //   alert("Error :", e);
        // });
      }
    }
  return (
        <div>
            <div>
                <img style={{ width: "55%", height: "40%", float: "left" }} src={require("./images/Screenshot (417).png")}></img>
            </div>
           
            <div className="loginjaswanth">
            
                <h4>Join Twitter today.</h4>
                <form onSubmit={handleClick}>
          <input
              placeholder="User Name"
              required
              ref={userName}
             
            />
            <br></br>
            <input
              placeholder="Name"
              required
              ref={name}
             
            />
            <br></br>
            <input
              placeholder="Email"
              required
              ref={email}
          
              type="email"
            />
            <br></br>
            <input
              placeholder="Password"
              required
              ref={password}
      
              type="password"
              minLength="6"
            />
            <br></br>
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
           
              type="password"
            />
            <br></br>
            <button type="submit">
              Sign Up
            </button>
            <br></br>
           
           
          </form>
                <Link to="/login"> <button>Back to login</button></Link> 
            </div>
        </div>
       
    )
}