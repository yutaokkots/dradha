import React from 'react'
import LogoutButton from '../../authComponents/LogoutButton'
import Clock from '../../timerComponents/Clock/Clock'
import { useContext } from 'react'

import { TimeContext } from '../../../Pages/Dashboard/Dashboard'
import logo from "../../../assets/logos/dradha_logo.svg"


export default function SideBar({user, setUser, setMenu, start, pause, restart}) {
    const {sessionTimer, setSessionTimer, timerStarted, setTimerStarted, seconds, minutes, isRunning, activeMenuItem} = useContext(TimeContext)

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

                <div className="flex items-center justify-center p-4 pt-6 bg-vanilla w-screen">
                    <a className="" href="/"> <img width='150rem'  src={logo} /></a>
                </div>

                <div className='side-bar-menu-item flex bg-cardamom text-vanilla w-screen shadow-2xl'>
                    <ul className="flex flex-wrap flex-row items-center list-none text-lg justify-evenly px-3 py-3 w-screen">
                        <li 
                            className='cursor-pointer'
                            value='1'
                            onClick={handlePageOpen}
                            >Timers</li>
                        <li
                            className='cursor-pointer'
                            value='0'
                            onClick={handlePageOpen}
                            >Intents</li>
                        <li
                            className='cursor-pointer'
                            value='2'
                            onClick={handlePageOpen}
                            >Inspiration</li>
                    </ul>
                </div>

                <div className='p-2 flex items-center justify-between space-x-6  w-screen side-bar-menu-item  bg-land text-cardamom shadow-xl'>
                    <div className=' bg-vanilla opacity-2 text-ocean border-solid border-2 rounded-md px-2 py-1 border-land'>
                        <Clock/>
                    </div>      
                    {(!timerStarted) ?
                        <div>
                            <h2></h2>
                        </div> 
                        :
                        (activeMenuItem === 1)
                        ?
                        <span>be your best</span>
                        :
                        <div>
                            <span>{twoDigits(minutes)}</span>:<span>{twoDigits(seconds)}</span>
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