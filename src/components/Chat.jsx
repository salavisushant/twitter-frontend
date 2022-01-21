
import "./chat.css"
import io from "socket.io-client";
import {useContext, useEffect, useState} from "react"
import { AuthContext } from "../contexts/AuthContextProvider";

export const Chat = ()=>{
    const{token, handleToken} = useContext(AuthContext)

    const socket = io("http://localhost:3001/messages", {
        transports: ["websocket", "polling"]
      });

      const [message, setMessage] = useState("");
      const [messages, setMessages] = useState([]);

      useEffect(() => {
        socket.on("connect", () => {
          socket.emit("username", token.user.username);
        });
    })
    console.log(token.user)
    return<div className="header">
        <div style={{fontSize:"25px",textAlign:"left", margin:"10px",width:"100%"}}>Messages</div>
        <div className="chat">
            <div style={{height:"300px", backgroundColor:"white"}}></div>
            <input type="text" style={{width:"80%",height:"25px", float:"left",margin:"5px"}} name="userChat" />
            <button onClick={()=>{
                console.log("chat")
            }}>Send</button>
        </div>
    </div>
}