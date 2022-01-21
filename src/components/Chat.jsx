
import "./chat.css"
export const Chat = ()=>{

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