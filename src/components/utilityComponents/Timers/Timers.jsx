import React from 'react'
import Meditation from '../../timerComponents/Clock/Meditation';
import Pomodoro from '../../timerComponents/Clock/Pomodoro'
import './Timers.css'
import {useEffect} from 'react'

export default function Timers({setGlobalTime, timerRef, timerOn}) {
    return (
        <>
            <div className="bg-ocean w-screen h-screen">
                <Meditation setGlobalTime={setGlobalTime} timerRef={timerRef} timerOn={timerOn}/>
            </div>
        </>  
    );
}
