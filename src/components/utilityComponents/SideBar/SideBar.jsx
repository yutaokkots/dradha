import React from 'react'
import LogoutButton from '../../authComponents/LogoutButton'
import Clock from '../../timerComponents/Clock/Clock'
import { Link, useContext } from 'react'
import SideBarItems from '../SideBarItems/SideBarItems'
import './SideBar.css'
import { TimeContext } from '../../../Pages/Dashboard/Dashboard'
import logo from "../../../assets/logos/dradha_logo.svg"

export default function SideBar({user, setUser, setMenu}) {
    const {sessionTimer, setSessionTimer, timerStarted, setTimerStarted} = useContext(TimeContext)

    function handlePageOpen(evt){
        setMenu(evt.target.value)
    }

    return (
        <>
            <div className='flex'>
                <div className={`w-72 h-screen bg-vanilla`} >
                        <div className="">
                            <a href="/"><img className="h-12 w-12" src={logo} /></a>
                        </div>
                        <Clock/>

                        <h2>{timerStarted ? 'timer on' : 'timer off'}</h2>

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
                </div>
            </div>
        </>
    )
}


//        <SideBarItems />