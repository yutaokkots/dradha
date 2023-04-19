import React from 'react'
import LogoutButton from '../../authComponents/LogoutButton'
import Clock from '../../timerComponents/Clock/Clock'
import { Link } from 'react'
import SideBarItems from '../SideBarItems/SideBarItems'
import './SideBar.css'

export default function SideBar({user, setUser, setMenu, sessionTimer}) {
    
    function handlePageOpen(evt){
        setMenu(evt.target.value)
    }

    return (
        <>
            <h1>clock!</h1>
            <h5>sessionTimer.elapsedSeconds: {sessionTimer.elapsedSeconds}</h5>
            <h5>sessionTimer.totalSeconds: {sessionTimer.totalSeconds}</h5>
            <h5>sessionTimer.elapsedMinutes: {sessionTimer.elapsedMinutes}</h5>
            <h5>sessionTimer.totalMinutes: {sessionTimer.totalMinutes}</h5>
            

            <Clock/>
            <div className='side-bar-menu-item' style={{border:'1px solid rgb(99, 22, 255)'}}>
                <ul>
                    <li
                        value='0'
                        onClick={handlePageOpen}
                        >Intents</li>
                    <li
                        value='1'
                        onClick={handlePageOpen}
                        >Timers</li>
                    <li
                        value='2'
                        onClick={handlePageOpen}
                        >Inspiration</li>
                </ul>
            </div>
            <LogoutButton user={user} setUser={setUser} />
        </>
    )
}


//        <SideBarItems />