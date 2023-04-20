import React, { useState, useEffect, useContext }  from 'react'
import { useTimer } from 'react-timer-hook';
import { TimeContext } from '../../../Pages/Dashboard/Dashboard'
import ProgressBarComp from './ProgressBarComp';

const expiryTimestamp = 20

export default function TimerComp({inputTime, timerRef, setGlobalTime, timerOn, setTimer}) {
    // useContext variables declared to set and get the global variables in TimeContext
    const {sessionTimer, setSessionTimer, timerStarted, setTimerStarted, seconds, minutes, hours, pause, restart, isRunning, inputValue} = useContext(TimeContext)

    // declaring useTimer values to be used in this component and child components
    // const { seconds, minutes, hours, days, isRunning, 
    //     start, pause, resume, restart,
    //     } = useTimer({ expiryTimestamp, onExpire: () => setTimerStarted(false)});

    const initialSecond = sessionTimer.elapsedSeconds > 0 && timerStarted ? sessionTimer.elapsedSeconds : 0
    const initialTotalSecond = sessionTimer.totalSeconds > 0 && timerStarted ? sessionTimer.totalSeconds : 0
    // useState variables declared for setting the time displayed in the progressbar?
    const [second, setSecond] = useState(initialSecond)                 // elapsedSecond from sessionTimer
    const [totalSecond, setTotalSecond] = useState(initialTotalSecond)      //totalSecond from sessionTimer

    // useEffect() -> detects changes in seconds value to re-render progress bar
    // useEffect(()=>{
    //     let elapsedSeconds = convertSeconds(seconds,minutes,hours,days)
    //     let totalSeconds = convertSeconds(0, inputTime)
    //     const newSession = {
    //         elapsedSeconds: elapsedSeconds,
    //         totalSeconds: totalSeconds, 
    //         elapsedMinutes: Math.ceil(elapsedSeconds/60), 
    //         totalMinutes: inputTime}
    //     setGlobalTime(elapsedSeconds)
    //     setSessionTimer(newSession)
    //     setSecond(elapsedSeconds)
    //     setTotalSecond(totalSeconds)

    // }, [seconds, minutes, hours, days])

    // twoDigits() -> changes the single digit time values to double digits
    function twoDigits(singleDigit){
        if (singleDigit.toString().length === 1) return `0${singleDigit}`
        else return singleDigit
    }

    // sets the user input, in min, to the time that the user sets
    function setTimerComp(inputTime){
        let seconds = timerOn ? timerRef : inputTime * 60
        const time = new Date();
        time.setSeconds(time.getSeconds() + seconds);
        timerOn = true
        setTimerStarted(true)
        restart(time)
    }

    // // convertSeconds() -> converting input time  information to seconds so it displays in the progress bar
    // function convertSeconds(seconds = 0, minutes = 0, hours = 0, days = 0){
    //     return seconds + minutes * 60 + hours * 60 * 60 + days * 24 * 60 * 60
    // }

    // clearTimer() -> resets the timer to 0
    function clearTimer(){
        setSessionTimer({
            elapsedSeconds: 0,
            totalSeconds: 0, 
            elapsedMinutes: 0, 
            totalMinutes: 0})
        setTimer(0)
        restart(0)
    }

    return (
        <>
            <div  className="flex items-center justify-center  align-middle pt-10">
                <div className="flex items-center justify-center ">
                    <ProgressBarComp />
                </div>

            </div>

            <div>
                <div className="pt-5 text-vanilla text-xl">
                    <div className='digital-timer'>
                    {(hours) ? <span>{twoDigits(hours)}</span>: <span></span>} <span>{twoDigits(minutes)}</span>:<span>{twoDigits(seconds)}</span>
                    </div>
                </div>

            </div>
            <div className='p-2 flex flex-row items-center justify-between space-x-6 '>
                <button className=' text-cardamom bg-vanilla hover:bg-land hover:text-vanilla py-1 px-1 rounded mt-5 mb-5' onClick={pause}>Pause</button>
                <button className=' bg-land text-vanilla hover:text-cardamom hover:bg-vanilla py-1 px-1 rounded mt-5 mb-5' onClick={() => setTimerComp(inputValue)}
                    >Start</button>
                <button className=' text-vanilla bg-sunset hover:bg-land hover:text-vanilla py-1 px-1 rounded mt-5 mb-5' onClick={clearTimer}
                    >Reset</button>
            </div>
        </>
    );
}

