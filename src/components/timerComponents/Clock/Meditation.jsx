import React from 'react'
import { useState, useContext} from 'react'
//import Sandbox from './Sandbox'
import TimerComp from './TimerComp'
import TimerInputSlider from './TimerInputSlider'
import { TimeContext } from '../../../Pages/Dashboard/Dashboard'

// where are timer values initialized?
// timerInputSlider.jsx, setting the slider => const [value, setValue] = useState()
// progressbar in TimerComp.jsx -> second and total second
//      const [second, setSecond] = useState(0)
//      const [totalSecond, setTotalSecond] = useState(0)
// 1) global states are as follows: sessionTimer, setSessionTimer, timerStarted, setTimerStarted} = useContext(TimeContext)
//   if timerStarted is true, then check to see if sessionTimer is > 0
// 2) then set initial timer value as the sessionTimer, and pass down to TimeContext. 
// 3) then set inital progress bar to second and total second
// 4) 

export default function Meditation({setGlobalTime, timerRef, timerOn}) {
    // global variable, TimeContext, is called here with useContext()
    const {sessionTimer, setSessionTimer, timerStarted, setTimerStarted} = useContext(TimeContext)
    
    // initially reads the global variable - if a timer has already started and the amount of time in the global timer > 0,
    // then set the global state to the component state
    const initialTimerValue = sessionTimer.elapsedMinutes > 0 && timerStarted ?  sessionTimer.elapsedMinutes : 0
    
    // customMedtime is set in minutes
    const [customMedTime, setCustomMedTime] = useState(initialTimerValue)

    function resetTime(input){
        setCustomMedTime(input)
        setSessionTimer(input)
    }

    return (
        <div style={{textAlign: 'center'}}>
            <TimerComp inputTime={customMedTime} setGlobalTime={setGlobalTime} timerRef={timerRef} timerOn={timerOn} setTimer={resetTime}/>
            <TimerInputSlider setTimer={resetTime} timerValue={customMedTime} initialValue={initialTimerValue} />
        </div>
      );
}