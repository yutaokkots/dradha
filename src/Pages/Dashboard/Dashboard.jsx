import React, { useState, useRef, useEffect, createContext } from 'react'
import SideBar from '../../components/utilityComponents/SideBar/SideBar'
import Timers from '../../components/utilityComponents/Timers/Timers'
import IntentComp from '../../components/intentComponents/IntentComp'
import Inspiration from '../../components/Inspiration/Inspiration'
import './Dashboard.css'
import { useTimer } from 'react-timer-hook'

//////// createContext
// context hook for saving time information 
export const TimeContext = createContext()

export default function Dashboard({user, setUser}) {
    // const timerRef = useRef() for keeping track of time
    const timerRef = useRef()

    // select which panel to show on dashboard
    const [activeMenuItem, setActiveMenuItem] = useState(0);
    const dashMenuRef = useRef(0);

    // useState for timeContext - keeps track of current seconds of timer
    const [sessionTimer, setSessionTimer] = useState({elapsedSeconds: 0, totalSeconds: 0, elapsedMinutes: 0, totalMinutes: 0})
    const [timerStarted, setTimerStarted] = useState(false)
    const [inputValue, setInputValue] = useState(1)

    // state for timer on
    const [timerOn, setTimerOn] = useState(false)

    // state for closing and opening side-bar
    const [sideBarOpen, setSideBarOpen] = useState(true)
    
    function setGlobalTime(time){
        timerRef.current=time
    }
    // function setGlobaltime is located and triggered at TimerComp.jsx -> setGlobalTime(convertSeconds(seconds,minutes,hours,days))

    const expiryTimestamp = 20
    // declaring useTimer values to be used in this component and child components
    const { seconds, minutes, hours, days, isRunning, 
        start, pause, resume, restart,
        } = useTimer({ expiryTimestamp, onExpire: () => setTimerStarted(false)});

    // convertSeconds() -> converting input time  information to seconds so it displays in the progress bar
    function convertSeconds(seconds = 0, minutes = 0, hours = 0, days = 0){
        return seconds + minutes * 60 + hours * 60 * 60 + days * 24 * 60 * 60
    }

    const inputTime = sessionTimer.elapsedMinutes > 0 && timerStarted ?  sessionTimer.elapsedMinutes : 0


    useEffect(()=>{
        let elapsedSeconds = convertSeconds(seconds,minutes,hours,days)
        let totalSeconds = convertSeconds(0, inputTime)
        const newSession = {
            elapsedSeconds: elapsedSeconds,
            totalSeconds: totalSeconds, 
            elapsedMinutes: Math.ceil(elapsedSeconds/60), 
            totalMinutes: inputTime}
        setGlobalTime(elapsedSeconds)
        setSessionTimer(newSession)

    }, [seconds, minutes, hours, days])

    return (
        <>  
            <TimeContext.Provider value={{sessionTimer, setSessionTimer, timerStarted, setTimerStarted, seconds, minutes, hours, pause, restart, isRunning, inputValue, setInputValue}} >
                    <div >

                            <div className="container">
                                {}
                                    <SideBar 
                                        user={user} 
                                        setUser={setUser}
                                        setMenu={setActiveMenuItem}
                                        start={start}
                                        pause={pause}
                                        restart={restart}
                                        />
                                    
                            </div>
                    </div>


                        <div className='main-section container'>
                            {activeMenuItem === 0 &&
                                <div >
                                    <IntentComp 
                                        user={user}
                                        />
                                </div>
                                }
                            {activeMenuItem === 1 &&
                            <div >
                                <Timers setGlobalTime={setGlobalTime} timerRef={timerRef} timerOn={timerOn}/>
                            </div>
                            }
                            {activeMenuItem === 2 &&
                            <div >
                                <h1>Main Section</h1>
                                <Inspiration />
                            </div>
                            }
                            
                        </div>

            </TimeContext.Provider>           
        </>
    
    )
}
