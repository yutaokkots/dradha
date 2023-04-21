import React from 'react'
import { useState, useContext} from 'react'
//import Sandbox from './Sandbox'
import TimerComp from './TimerComp'
import TimerInputSlider from './TimerInputSlider'
import { TimeContext } from '../../../Pages/Dashboard/Dashboard'


export default function Meditation({ timerRef}) {
    // global variable, TimeContext, is called here with useContext()
    const {sessionTimer, setSessionTimer, timerStarted, setTimerStarted} = useContext(TimeContext)
    
    // initially reads the global variable - if a timer has already started and the amount of time in the global timer > 0,
    // then set the global state to the component state
    const initialTimerValue = sessionTimer.elapsedMinutes > 0 && timerStarted ?  sessionTimer.elapsedMinutes : 0
    
    // customMedtime is set in minutes
    const [customMedTime, setCustomMedTime] = useState(initialTimerValue)

    function resetTime(input){
        setCustomMedTime(input)
        let sessionTime = {elapsedSeconds: 0, totalSeconds: 0, elapsedMinutes: 0, totalMinutes: input}
        setSessionTimer(sessionTime)
    }

    return (
        <>
            <div className='flex items-center'>
                <div className='p-6 max-w-sm mt-5 mx-auto w-3/4  bg-vanilla text-cardamom rounded-xl shadow-lg'>
                    <TimerComp inputTime={customMedTime} />
                    <div className='flex items-center justify-center'>
                    <TimerInputSlider setTimer={resetTime} timerValue={customMedTime} initialValue={initialTimerValue} />
                    </div>
                </div>
            </div>
        </>
      );
}