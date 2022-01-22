
import "./chat.css"
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {useContext, useEffect, useState} from "react"
import { AuthContext } from "../contexts/AuthContextProvider";


export const Chat = ()=>{
  const client = new W3CWebSocket('wss://web-chat123.herokuapp.com/');

    const{token, handleToken} = useContext(AuthContext)

    const [messages, setMessages] = useState([])
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log('got reply! ', dataFromServer);
      if (dataFromServer.type === "message") {
        
          setMessages(
             [...messages,
            {
              msg: dataFromServer.msg,
              user: dataFromServer.user
            }]
          )
        
      }
    };
    return<div className="header">
        <div style={{fontSize:"25px",textAlign:"left", margin:"10px",width:"100%"}}>Messages</div>
        <div className="chat">
            <div style={{height:"300px", backgroundColor:"white"}}>
           {messages?.map((u)=>{
             return <div style={{float:"left"}}> <span style={{fontSize:"20px",fontWeight:"800"}}>{u.user}</span> {u.msg}</div>
           })}
           
            </div>
            <input type="text" onChange={()=>{}} style={{width:"80%",height:"25px", float:"left",margin:"5px"}} name="message" />
            <button onClick={()=>{}}>Send</button>
        </div>
    </div>
}