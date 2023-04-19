import React, { useState, useRef, useEffect, createContext } from 'react'
import SideBar from '../../components/utilityComponents/SideBar/SideBar'
import Timers from '../../components/utilityComponents/Timers/Timers'
import IntentComp from '../../components/intentComponents/IntentComp'
import Inspiration from '../../components/Inspiration/Inspiration'
import './Dashboard.css'


//////// createContext
// context hook for saving time information 
export const TimeContext = createContext()

const initSessionTimer = {flow:[20, -5, 20, -5, 20, -30], task:0, timer:0}

export default function Dashboard({user, setUser}) {
    // const timerRef = useRef() for keeping track of time
    const timerRef = useRef()

    // select which panel to show on dashboard
    const [activeMenuItem, setActiveMenuItem] = useState(0);
    const dashMenuRef = useRef(0);

    // useState for timeContext - keeps track of current seconds of timer
    const [sessionTimer, setSessionTimer] = useState({elapsedSeconds: 0, totalSeconds: 0, elapsedMinutes: 0, totalMinutes: 0})
    const [timerStarted, setTimerStarted] = useState(false)

    // state for timer on
    const [timerOn, setTimerOn] = useState(false)

    //const [update, setUpdate] = useState([0, 0])
    
    function setGlobalTime(time){
        timerRef.current=time
        console.log('dashMenuRef called in Dashboard ', dashMenuRef)
        console.log('in Dashboard.jsx, the value in timerRef.current: ', timerRef.current)
    }
    // function setGlobaltime is located and triggered at TimerComp.jsx -> setGlobalTime(convertSeconds(seconds,minutes,hours,days))

    useEffect(() => {
        console.log('triggered by timerRef, this is the sessionTimer ', sessionTimer)
        console.log('triggered by timerRef, this is the timerRef ', timerRef)
    }, [timerRef])


    return (
        <>  
            <TimeContext.Provider value={{sessionTimer, setSessionTimer, timerStarted, setTimerStarted}} >
                <div className='window-main'>
                    <div className='side-bar'>
                    <h1>Side Bar</h1>
                    <h2>timerStarted? = {`${timerStarted}`}</h2>
                        <SideBar 
                            user={user} 
                            setUser={setUser}
                            sessionTimer={sessionTimer}
                            setMenu={setActiveMenuItem}
                            />
                    </div>

                    <div className='main-section'>
                        {activeMenuItem === 0 &&
                            <div style={{border: '2px solid rgb(255, 99, 71)'}}>
                                <p style={{color: 'rgb(255, 99, 71)'}}>Intents.jsx in components/utilitycomponents/Intents</p>
                                <h1>Main Section</h1>
                                <IntentComp 
                                    user={user}
                                    />
                                
                            </div>
                            }
                        {activeMenuItem === 1 &&
                        <div style={{border: '2px solid rgb(255, 99, 71)'}}>
                            <p style={{color: 'rgb(255, 99, 71)'}}>Timers.jsx in components/utilityComponents/Timers</p>
                            <h1>Main Section</h1>
                            <Timers setGlobalTime={setGlobalTime} timerRef={timerRef} timerOn={timerOn}/>
                        </div>
                        }
                        {activeMenuItem === 2 &&
                        <div style={{border: '2px solid rgb(255, 99, 71)'}}>
                            <p style={{color: 'rgb(255, 99, 71)'}}>Timers.jsx in Dashboard</p>
                            <h1>Main Section</h1>
                            <Inspiration />
                        </div>
                        }
                        
                    </div>
                </div>
            </TimeContext.Provider>           
        </>
    
    )
}
