import React, { useState } from 'react'
import './TimerInputSlider.css'


export default function TimerInputSlider( {setTimer, timerValue} ) {
    const [value, setValue] = useState(1);
    const maxValue = 59;

    function onChange(evt){
        setValue(evt.target.value)
        setTimer(value)
    }

    // function getBackgroundSize(){
    //     return {
    //         backgroundSize: `${(value * 100) / maxValue} % 100%`,
	// };



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
