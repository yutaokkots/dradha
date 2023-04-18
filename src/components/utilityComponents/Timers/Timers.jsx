import React from 'react'
import Meditation from '../../timerComponents/Clock/Meditation';
import Pomodoro from '../../timerComponents/Clock/Pomodoro'
import './Timers.css'

export default function Timers({setGlobalTime, timerRef, timerOn}) {

    return (
        <>
            <div style={{border: '2px solid rgb(255, 99, 71)'}}>
                <p style={{color: 'rgb(255, 99, 71)'}}>timers.jsx</p>
                <Meditation setGlobalTime={setGlobalTime} timerRef={timerRef} timerOn={timerOn}/>
            </div>
        </>  
    );
}
