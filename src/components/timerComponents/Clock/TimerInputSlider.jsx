import React, { useState, useContext } from 'react'
import './TimerInputSlider.css'


export default function TimerInputSlider( {setTimer, timerValue, initialValue} ) {
    const [value, setValue] = useState(initialValue);
    const maxValue = 59;

    function onChange(evt){
        setValue(evt.target.value)
        setTimer(value)
        console.log(value)
    }

    return (
        <>
            {timerValue}
            <input
                type="range"
                min="1"
                max={maxValue}
                onChange={onChange}
    
                value={timerValue}
                />
        </>
  )
}
