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
    const {sessionTimer, setSessionTimer, timerStarted, setTimerStarted} = useContext(TimeContext)

    // customMedtime will be set in minutes
    const [customMedTime, setCustomMedTime] = useState(0)
    
    function resetTime(input){
        setCustomMedTime(input)
        setSessionTimer(input)
    }

    // progress bar
    // converting input time  information to seconds so it displays in the progress bar
    // function convertSeconds(seconds = 0, minutes = 0, hours = 0, days = 0){
    //     return seconds + minutes * 60 + hours * 60 * 60 + days * 24 * 60 * 60
    // }

    return (
        <div style={{textAlign: 'center'}}>
            <TimerComp inputTime={customMedTime} setGlobalTime={setGlobalTime} timerRef={timerRef} timerOn={timerOn}/>
            <TimerInputSlider setTimer={resetTime} timerValue={customMedTime} />
        </div>
      );
}