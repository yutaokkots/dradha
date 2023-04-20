import React from 'react'
import LogoutButton from '../../authComponents/LogoutButton'
import Clock from '../../timerComponents/Clock/Clock'
import { Link, useContext } from 'react'
import SideBarItems from '../SideBarItems/SideBarItems'

import { TimeContext } from '../../../Pages/Dashboard/Dashboard'
import logo from "../../../assets/logos/dradha_logo.svg"


export default function SideBar({user, setUser, setMenu, start, pause, restart}) {
    const {sessionTimer, setSessionTimer, timerStarted, setTimerStarted, seconds, minutes, isRunning} = useContext(TimeContext)

    function handlePageOpen(evt){
        setMenu(evt.target.value)
    }
    // twoDigits() -> changes the single digit time values to double digits
    function twoDigits(singleDigit){
        if (singleDigit.toString().length === 1) return `0${singleDigit}`
        else return singleDigit
    }

    return (
        <>
            <div className='flex flex-col sm:flex-wid'>

                <div className="flex items-center justify-center p-3  bg-vanilla w-screen">
                    <a className="" href="/"> <img width='150rem'  src={logo} /></a>
                </div>

                <div className='side-bar-menu-item flex bg-land text-cardamom  w-screen'>
                    <ul className="flex flex-wrap items-center space-x-6 justify-between  p-3 mx-auto w-screen">

                        <li
                            value='1'
                            onClick={handlePageOpen}
                            >Timers</li>
                        <li
                            value='0'
                            onClick={handlePageOpen}
                            >Intents</li>
                        <li
                            value='2'
                            onClick={handlePageOpen}
                            >Inspiration</li>
                    </ul>
                </div>

                <div className='p-2 flex items-center justify-between space-x-6  w-screen side-bar-menu-item  bg-land text-cardamom'>
                    <div className=' bg-vanilla opacity-2 text-ocean border-solid border-2 rounded-md px-2 py-1 border-land'>
                        <Clock/>
                    </div>
                            
                    {(true) ?
                        <div>
                            <h2>{timerStarted ? 'on' : 'off'}</h2>
                        </div> 
                        :
                        <div>
                            <span>{twoDigits(minutes)}</span>:<span>{twoDigits(seconds)}</span>

                            <button className="bg-sky-500 hover:bg-sky-700" onClick={pause}>Pause</button>
                            <button className="bg-sky-500 hover:bg-sky-700" onClick={start}>Start</button>
                            <button onClick={() => {
                                            const time = new Date();
                                            time.setSeconds(time.getSeconds() + 300);
                                            restart(time)
                                            }}>Restart</button>
                        </div>
                        }

                        <div>
                            <LogoutButton user={user} setUser={setUser} />
                        </div>
                </div>

                   
  


            </div>
        </>
    )
}