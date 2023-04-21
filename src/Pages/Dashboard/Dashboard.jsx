import React, { useState, useRef, useEffect, createContext } from 'react'
import SideBar from '../../components/utilityComponents/SideBar/SideBar'
import Timers from '../../components/utilityComponents/Timers/Timers'
import IntentComp from '../../components/intentComponents/IntentComp'
import Inspiration from '../../components/Inspiration/Inspiration'
import './Dashboard.css'
import { useTimer } from 'react-timer-hook'
import { useSound } from 'use-sound'
import chime from '../../assets/sounds/singing-bell-hit-1-105400.mp3'
import * as inspAPI from '../../utilities/insp-api'

//////// createContext
// context hook for saving time information 
export const TimeContext = createContext()

export default function Dashboard({user, setUser}) {
    // select which panel to show on dashboard
    const [activeMenuItem, setActiveMenuItem] = useState(0);

    // useState for timeContext - keeps track of current seconds of timer
    const [sessionTimer, setSessionTimer] = useState({elapsedSeconds: 0, totalSeconds: 0, elapsedMinutes: 0, totalMinutes: 0})
    const [timerStarted, setTimerStarted] = useState(false)
    const [inputValue, setInputValue] = useState(1)
    
    const expiryTimestamp = 20
    // declaring useTimer values to be used in this component and child components
    const { seconds, minutes, hours, days, isRunning, 
        start, pause, resume, restart,
        } = useTimer({ expiryTimestamp, onExpire: () => {
            setTimerStarted(false)}
        });

    // useSound for chime sound
    const [play] = useSound(chime)
    
    // getQuote from server
    const [quote, setQuote] = useState('')
    const [newQuote, setNewQuote] = useState(1)

    function getNewQuote(){
        setNewQuote(-newQuote)
    }

    useEffect(()=>{
        async function getQuote(){
            try{
                const newQuote = await inspAPI.getQuote()
                setQuote(newQuote)
            } catch(err){
                console.error('err', err)
            }
        }
        getQuote()
    },[newQuote])

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
        setSessionTimer(newSession)

    }, [seconds, minutes, hours, days])

    useEffect(()=>{
        if (activeMenuItem === 1 && !isRunning){
            if (seconds === 0) play()
        }
    }, [isRunning])

    return (
        <>  
            <TimeContext.Provider value={{sessionTimer, setSessionTimer, timerStarted, setTimerStarted, seconds, minutes, hours, start, pause, restart, isRunning, inputValue, setInputValue, activeMenuItem}} >
                    <div >
                            <div >
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

                        <div >
                            {activeMenuItem === 0 &&
                                <div >
                                    <IntentComp 
                                        user={user}
                                        />
                                </div>
                                }
                            {activeMenuItem === 1 &&
                            <div >
                                <Timers />
                            </div>
                            }
                            {activeMenuItem === 2 &&
                            <div >
                                <Inspiration getNewQuote={getNewQuote} quote={quote[0]}/>
                            </div>
                            }
                            
                        </div>

            </TimeContext.Provider>           
        </>
    
    )
}
