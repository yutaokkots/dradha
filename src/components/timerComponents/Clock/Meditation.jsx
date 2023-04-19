import React from 'react'
import { useState, useContext } from 'react'
//import Sandbox from './Sandbox'
import TimerComp from './TimerComp'
import TimerInputSlider from './TimerInputSlider'
import { TimeContext } from '../../../Pages/Dashboard/Dashboard'

export default function Meditation({setGlobalTime, timerRef, timerOn}) {
    const {sessionTimer, setSessionTimer} = useContext(TimeContext)

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