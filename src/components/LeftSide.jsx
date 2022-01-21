import './LeftSide.scss'
// import { FaTwitter } from "react-icons/fa";
import {NavLink} from 'react-router-dom'
import { BiHomeCircle,BiHash } from "react-icons/bi";
import { GrNotification,GrMailOption } from "react-icons/gr"
import {  BsBookmark, BsPersonFill} from "react-icons/bs"
import { RiFileList2Line} from "react-icons/ri"

import { CgMoreO} from "react-icons/cg"



// import {Twitter_Icon, Home_Icon , Explore_Icon , Notification_Icon, Messages_Icon , Profile_Icon , More_Icon } from './Icons'

export const LeftSide = () => {
    return <>
        <div className = "LeftSide">
        <div className = "Container">
        <header>  
        <img alt="twitter" src="https://abs.twimg.com/errors/logo46x38.png"/>
         </header>
        <nav>
        <NavLink  className="navlink" to="/"><span><BiHomeCircle  style={{width: "35px"}}/>&nbsp;&nbsp; Home</span> </NavLink>

        <NavLink to="/explore"><span> <BiHash style={{width: "35px"}} />&nbsp;&nbsp; Explore</span> </NavLink>

        <NavLink to="/notifications"><span> <GrNotification style={{width: "35px"}}/>&nbsp;&nbsp;  Notifications</span> </NavLink>

        <NavLink to="/messages"><span><GrMailOption style={{width: "35px"}}/>&nbsp;&nbsp; Messages</span> </NavLink>

        <NavLink to="/bookmarks"><span><BsBookmark style={{width: "35px"}}/>&nbsp;&nbsp; Bookmarks</span></NavLink>

        <NavLink to="/lists"><span><RiFileList2Line style={{width: "35px"}}/>&nbsp;&nbsp;  Lists</span></NavLink>

        <NavLink to="/profile"><span> <BsPersonFill style={{width: "35px"}}/>&nbsp;&nbsp; Profile</span> </NavLink>

        <button className ="more"><span> <CgMoreO style={{width: "35px"}}/>&nbsp;&nbsp; More </span> </button>
        </nav>


        <button className="tweet">Tweet</button>

        <footer>
            <button className="account">
                <div className="Photo">
            
                    <img alt="Abhi_Singh"  src="https://pbs.twimg.com/profile_images/1462337315137671171/Q6565B55_normal.jpg" />
                </div>
                <div className="Name"><h4>Name </h4>
                <div className="username">@Username</div>
                </div>
            </button>
        </footer>
        </div>



        </div>
    </>
}