import React, { useState, useEffect, useContext }  from 'react'
import { useTimer } from 'react-timer-hook';
import { TimeContext } from '../../../Pages/Dashboard/Dashboard'
import ProgressBarComp from './ProgressBarComp';

export default function TimerComp({inputTime}) {
    // useContext variables declared to set and get the global variables in TimeContext
    const {sessionTimer, setSessionTimer, timerStarted, setTimerStarted, seconds, minutes, hours, start, pause, restart, isRunning, inputValue, setInputValue} = useContext(TimeContext)

    // twoDigits() -> changes the single digit time values to double digits
    function twoDigits(singleDigit){
        if (singleDigit.toString().length === 1) return `0${singleDigit}`
        else return singleDigit
    }

    // sets the user input, in min, to the time that the user sets
    function setTimerComp(inputTime){
        if(sessionTimer.elapsedSeconds > 0 ){
            start()
        } else {
            let seconds = timerStarted ? sessionTimer.elapsedSeconds : inputTime * 60
            const time = new Date();
            time.setSeconds(time.getSeconds() + seconds);
            restart(time)
        }
        setTimerStarted(true)
    }

    function clearTimer(){
        setSessionTimer({
            elapsedSeconds: 0,
            totalSeconds: 0, 
            elapsedMinutes: 0, 
            totalMinutes: 0})
        setInputValue(1)    
        restart(0)
        setTimerStarted(false)
    }

    function onPause(){
        pause()
        setTimerStarted(false)
    }

    return (
        <>
            <div  className="flex items-center justify-center  align-middle pt-7">
                <div className="flex items-center justify-center ">
                    <ProgressBarComp />
                </div>

            </div>
            <div>
                <div className="pt-5 text-cardamom flex items-center justify-center text-xl">
                    <div className='digital-timer'>
                    {(hours) ? <span>{twoDigits(hours)}</span>: <span></span>} <span>{twoDigits(minutes)}</span>:<span>{twoDigits(seconds)}</span>
                    </div>
                </div>
            </div>
            
            <div className='p-2 flex flex-row items-center justify-between space-x-6 '>
                <button className=' text-cardamom border-2 border-cardamom bg-vanilla hover:bg-land hover:text-vanilla py-1 px-1 rounded mt-5 mb-5' onClick={onPause}>Pause</button>
                
                <button className=' bg-land text-vanilla hover:text-cardamom hover:bg-vanilla hover:border-2 hover:border-cardamom py-1 px-1 rounded mt-5 mb-5' onClick={() => setTimerComp(inputValue)}
                    >Start</button>
 
                <button className=' text-vanilla bg-sunset hover:bg-land hover:text-vanilla py-1 px-1 rounded mt-5 mb-5' onClick={clearTimer}
                    >Reset</button>
            </div>
        </>
    );
}

