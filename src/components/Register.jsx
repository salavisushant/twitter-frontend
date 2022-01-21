import { useRef } from "react";
import "./register.css";

export default function Register() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(passwordAgain.current.value, password.current.value)
    if (passwordAgain.current.value !== password.current.value) {
      alert("Passwords don't match!");
    } else {
      const user = {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      console.log(user)
      fetch("https://flipkart-dummy-server.herokuapp.com/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "content-type": "application/json" }
      }).then((res) => {
        res.json();
      }).then((res) => {
        alert("user successfully registered");
      }).catch((e) => {
        alert("Error :", e);
      });
    }
    // try {
    //   await axios.post("/register", user);
    //   history.push("/login");
    // } catch (err) {
    //   console.log(err);
    // }
    //     fetch("https://twitter-backend1.herokuapp.com/register", {
    //   method: "POST",
    //   body: JSON.stringify(user),
    //   headers: { "Content-type": "application/json; charset=UTF-8" },
    // })
   //   .then((res) => {

    //   })
    //   .catch((e) => {

    //   });​
    //   }
    // };
  }  
     

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <img style={{marginLeft:"1%",width:"100%",height:"100%"}} src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" alt="" />
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={name}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}