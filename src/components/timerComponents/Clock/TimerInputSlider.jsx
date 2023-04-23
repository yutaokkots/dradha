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
            <div className="flex flex-row flex-wrap items-center justify-between p-3 mx-auto w-screen">
                    <div className="p-1 box-border pl-3">
                        <span className="text-sm">{inputValue} min </span>
                    </div>

                    <div>
                        <input 
                            className='input-slider disabled:opacity-40'
                            type="range"
                            disabled={timerStarted}
                            min="1"
                            max={maxValue}
                            onChange={onChange}
                            value={inputValue}
                            />
                    </div>
            </div>
        </>
  )
}
