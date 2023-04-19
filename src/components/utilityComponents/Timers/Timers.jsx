import React from 'react'
import Meditation from '../../timerComponents/Clock/Meditation';
import Pomodoro from '../../timerComponents/Clock/Pomodoro'
import './Timers.css'
import {useEffect} from 'react'

export default function Timers({setGlobalTime, timerRef, timerOn}) {
    return (
        <>
            <div style={{border: '2px solid rgb(255, 99, 71)'}}>
                <Meditation setGlobalTime={setGlobalTime} timerRef={timerRef} timerOn={timerOn}/>
            </div>
        </>  
    );
}
