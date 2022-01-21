import {LeftSide} from './LeftSide'
import {RightSide} from './RightSide'
import {Center} from './Center'
import './Home.css'
import {Profile } from './Profile'



export const Home = () => {
    return<>
    <div className="Home">
    <LeftSide/>
   
    <Center/>
    <RightSide/>
    <Profile/>

    </div>
    </>
}