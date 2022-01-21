
import "./chat.css"
import io from "socket.io-client";
import {useContext, useEffect, useState} from "react"
import { AuthContext } from "../contexts/AuthContextProvider";
import moment from "moment";


export const Chat = ()=>{
    const{token, handleToken} = useContext(AuthContext)

    const socket = io("http://localhost:3001/", {
        transports: ["websocket", "polling"]
      });
      const [users, setUsers] = useState([]);
      const [message, setMessage] = useState("");
      const [messages, setMessages] = useState([]);

      useEffect(() => {
        socket.on("connection", () => {
          socket.emit("username", users);
          
        });
    },[])
    socket.on("message", message => {
        setMessages(messages => [...messages, message]);
       
      });
  const handlechange = ({target:{name,value}})=>{
setMessage(value)
console.log(message)
  }

  socket.emit("fgebskma")
      
    console.log("token.user.username")
    return<div className="header">
        <div style={{fontSize:"25px",textAlign:"left", margin:"10px",width:"100%"}}>Messages</div>
        <div className="chat">
            <div style={{height:"300px", backgroundColor:"white"}}>
            {messages?.map(({ user, date, text }, index) => (
              <div key={index} className="row mb-2">
                <div className="col-md-3">
                  {moment(date).format("h:mm:ss a")}
                </div>
                <div className="col-md-2">{user?.name}</div>
                <div className="col-md-2">{text}</div>
              </div>
            ))}
            </div>
            <input type="text" onChange={handlechange
            } style={{width:"80%",height:"25px", float:"left",margin:"5px"}} name="message" />
            <button onClick={()=>{
                console.log("chat")
                socket.on("messages", message);
                console.log(messages)
    setMessage("");
            }}>Send</button>
        </div>
    </div>
}