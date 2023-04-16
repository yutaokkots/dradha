import React from 'react'
import { useTime } from 'react-timer-hook';



export default function Clock() {
    const {minutes, hours, ampm,} = useTime({format: '24-hour'});

    function twoDigits(singleDigit){
        if (singleDigit.toString().length === 1) return `0${singleDigit}`
        else return singleDigit
    }
    
    return (
        <>
            <div className='clock-div'>
                <h1>Current Time</h1>
                <div className='clock-display'>
                    <h2><span>{twoDigits(hours)}</span>:<span>{twoDigits(minutes)}</span><span>{ampm}</span></h2>
                </div>
            </div>
        </>
      );
}
