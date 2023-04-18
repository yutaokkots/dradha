import React from 'react'
import { useState } from 'react'
//import Sandbox from './Sandbox'
import TimerComp from './TimerComp'
import TimerInputSlider from './TimerInputSlider'

export default function Meditation({setGlobalTime, timerRef, timerOn}) {
    // customMedtime will be set in minutes
    const [customMedTime, setCustomMedTime] = useState(0)
    
    function resetTime(input){
        console.log(input)
        setCustomMedTime(input)
        console.log(customMedTime)
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