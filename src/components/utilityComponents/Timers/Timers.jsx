import React from 'react'
import Meditation from '../../timerComponents/Clock/Meditation';
import Pomodoro from '../../timerComponents/Clock/Pomodoro'
import './Timers.css'
import {useEffect} from 'react'

export default function Timers() {
    return (
        <>
            
            <div >
            <style>{`body { background-image: url("https://res.cloudinary.com/dykpeapfn/image/upload/v1682064420/cloud_cmolv1.jpg"); }`}</style>
                <Meditation  />
            </div>
        </>  
    );
}
