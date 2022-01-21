import {LeftSide} from './LeftSide'
import {RightSide} from './RightSide'
import {Center} from './Center'
import './Home.css'
import { Chat } from './Chat'


export const Home = () => {
    return<>
    <div className="Home">
    <LeftSide/>
   
    <Center/>
    <RightSide/>
    <Chat />

    </div>
    </>
}