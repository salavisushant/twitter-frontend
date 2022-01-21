import {LeftSide} from './LeftSide'
import "./Profile.css"
import { HiOutlineLocationMarker } from "react-icons/hi"
import {FaBirthdayCake } from "react-icons/fa"
import {GoCalendar } from "react-icons/go"


export const Profile = () => {
    return (
        <>
    
        <div className="Main_container">
        <header>
        <h2>← Account Holder's Name </h2>
        <div>Number of tweets</div>
         </header>

          <div >
          <div className="pictures">
          <img className="cover_pic" alt="Cover_pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Two_red_dice_01.svg/1200px-Two_red_dice_01.svg.png" />
          <br/>
          <div className="profile_pic">
           <img className="pro_pic" alt="profile_pic" src="https://static1.squarespace.com/static/5ac589eb8ab722aa77be2eeb/5b479b056d2a73336ed80ffe/5b50d290562fa7d2dabe2955/1532023444871/random_interactive_share.jpg?2" /> 
           <span><button  className="edit_btn">Edit Profile</button></span>
               </div>
               </div>
               <div className="paragraph">
               <h2>Account Holder's Name </h2>
               <h4>@myusername</h4>
               <p ></p>
             
                    <div className="bottom_icon">
                    <div>
                        <HiOutlineLocationMarker/> &nbsp;&nbsp; Location
                    </div>
                    <div><FaBirthdayCake />&nbsp;&nbsp; Birthday</div>
                    <div> <GoCalendar/>&nbsp;&nbsp; Joined twitter on </div>
                     </div>
                     <div className="following">Following    <span className ="followers">Followers</span></div>
                </div>
        
           </div>


           <h3>&nbsp;&nbsp;My Tweets</h3>
            </div>
        </>
    )
}