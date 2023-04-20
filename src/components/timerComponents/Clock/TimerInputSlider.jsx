import React, { useState, useContext, useEffect } from 'react'
import './TimerInputSlider.css'
import { TimeContext } from '../../../Pages/Dashboard/Dashboard'


export default function TimerInputSlider( {setTimer, timerValue, initialValue} ) {
    const {sessionTimer, setSessionTimer, timerStarted, setTimerStarted, seconds, minutes, hours, pause, restart, isRunning, inputValue, setInputValue} = useContext(TimeContext)
    const [value, setValue] = useState(initialValue);
    const maxValue = 59;

    useEffect(()=>{
        setValue(sessionTimer.elapsedMinutes)

    },[])

    function onChange(evt){
        setValue(evt.target.value)
        setSessionTimer({
            elapsedSeconds: 0,
            totalSeconds: 0, 
            elapsedMinutes: 0, 
            totalMinutes: 0})
        setInputValue(value)
        setTimer(value)
    }

    return (
        <>
            {inputValue}
            <input 
                className='input-slider'
                type="range"
                min="1"
                max={maxValue}
                onChange={onChange}
    
                value={inputValue}
                />
        </>
  )
}
