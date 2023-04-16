import React from 'react'
import { useState } from 'react'
//import Sandbox from './Sandbox'
import TimerInput from './TimerInput'
import TimerComp from './TimerComp'

const initialTimerObject = {
    seconds: null,
    minutes: null,
    hours: null,
    days: null
}

export default function Meditation() {
    const [customMedTime, setCustomMedTime] = useState(null)


    // progress bar
    // converting input time  information to seconds so it displays in the progress bar
    // function convertSeconds(seconds = 0, minutes = 0, hours = 0, days = 0){
    //     return seconds + minutes * 60 + hours * 60 * 60 + days * 24 * 60 * 60
    // }

    // function setTime() {
    //     const time = new Date();
    //     time.setSeconds(time.getSeconds() + 300);
    //     restart(time)
    // }

    return (
        <div style={{textAlign: 'center'}}>
            <TimerInput setTimer={setCustomMedTime}/>
            <TimerComp inputTime={customMedTime}/>
        </div>
      );
}