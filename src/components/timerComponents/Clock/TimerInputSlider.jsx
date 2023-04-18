import React, { useState } from 'react'
import './TimerInputSlider.css'


export default function TimerInputSlider( {setTimer} ) {
    const [value, setValue] = useState(0);
    const maxValue = 60;

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
            {value}
            <input
                type="range"
                min="0"
                max={maxValue}
                onChange={onChange}
    
                value={value}
                />
        </>
  )
}
