import React from 'react'
import LogoutButton from '../../authComponents/LogoutButton'
import Clock from '../../timerComponents/Clock/Clock'
import { Link, useContext } from 'react'
import SideBarItems from '../SideBarItems/SideBarItems'

import { TimeContext } from '../../../Pages/Dashboard/Dashboard'
import logo from "../../../assets/logos/dradha_logo.svg"


export default function SideBar({user, setUser, setMenu}) {
    const {sessionTimer, setSessionTimer, timerStarted, setTimerStarted} = useContext(TimeContext)

    function handlePageOpen(evt){
        setMenu(evt.target.value)
    }

    return (
        <>
            <div className='flex flex-col sm:flex-wid'>


                <div className="object-center">
                    <a className="w-2 h-2" href="/"> <img width='150rem'  src={logo} /></a>
                </div>
                        

                <div className='side-bar-menu-item flex'>
                    <div>
                        <Clock/>
                    </div>
                    <div>
                        <h2>{timerStarted ? 'timer on' : 'timer off'}</h2>
                    </div>

                    <div
                        value='0'
                        onClick={handlePageOpen}
                        >Intents</div>
                    <div
                        value='1'
                        onClick={handlePageOpen}
                        >Timers</div>
                    <div
                        value='2'
                        onClick={handlePageOpen}
                        >Inspiration</div>
                    
                    <div>
                        <LogoutButton user={user} setUser={setUser} />
                    </div>
                </div>

            </div>
        </>
    )
}


//        <SideBarItems />