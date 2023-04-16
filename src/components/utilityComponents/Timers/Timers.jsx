import React from 'react'
import Meditation from '../../timerComponents/Clock/Meditation';
import Pomodoro from '../../timerComponents/Clock/Pomodoro'

export default function Timers() {

    return (
        <>
            <div style={{border: '2px solid rgb(255, 99, 71)'}}>
                <p style={{color: 'rgb(255, 99, 71)'}}>timers.jsx</p>
                <Meditation />
            
            </div>
        </>  
    );
}
