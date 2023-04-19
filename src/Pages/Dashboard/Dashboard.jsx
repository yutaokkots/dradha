import React, { useState, useRef, useEffect, createContext } from 'react'
import SideBar from '../../components/utilityComponents/SideBar/SideBar'
import Timers from '../../components/utilityComponents/Timers/Timers'
//import Sandbox from '../../components/timerComponents/Clock/Sandbox'
import IntentComp from '../../components/intentComponents/IntentComp'
import './Dashboard.css'
import Sandbox from '../../components/timerComponents/Clock/Sandbox'

//////// createContext
export const TimeContext = createContext(0)

const initSessionTimer = {flow:[20, -5, 20, -5, 20, -30], task:0, timer:0}

export default function Dashboard({user, setUser}) {

    const timerRef = useRef()

    // select which panel to show on dashboard
    const [activeMenuItem, setActiveMenuItem] = useState(0);
    const dashMenuRef = useRef(0);

    // useState for timeContext - keeps track of current seconds of timer
    const [sessionTimer, setSessionTimer] = useState(0)

    // state for timer on
    const [timerOn, setTimerOn] = useState(false)

    //const [update, setUpdate] = useState([0, 0])
    
    function setGlobalTime(time){
        timerRef.current=time
        console.log(timerRef.current)
    }


    // const timerRef = useRef()
    // useEffect(() => {
    // }, [dashMenuRef])


    return (
        <>  
            <TimeContext.Provider value={{sessionTimer, setSessionTimer}} >
                <div className='window-main'>
                    <div className='side-bar'>
                    <h1>Side Bar</h1>
                        <SideBar 
                            user={user} 
                            setUser={setUser}
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
                            <Sandbox />
                        </div>
                        }
                        
                    </div>
                </div>
            </TimeContext.Provider>           
        </>
    
    )
}
