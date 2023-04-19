import React, { useState, useEffect, useContext }  from 'react'
import { useTimer } from 'react-timer-hook';
import ProgressBar from 'react-customizable-progressbar'
import { TimeContext } from '../../../Pages/Dashboard/Dashboard'

const expiryTimestamp = 20

export default function TimerComp({inputTime, timerRef, setGlobalTime, timerOn}) {
    // useContext variables declared to set and get the global variables in TimeContext
    const {sessionTimer, setSessionTimer, timerStarted, setTimerStarted} = useContext(TimeContext)

    // declaring useTimer values to be used in this component and child components
    const { seconds, minutes, hours, days, isRunning, 
        start, pause, resume, restart,
        } = useTimer({ expiryTimestamp, onExpire: () => setTimerStarted(false)});

    // useState variables declared for setting the time displayed in the progressbar?
    const [second, setSecond] = useState(0)
    const [totalSecond, setTotalSecond] = useState(0)
    const [timerToggle, setTimerToggle] = useState(1)


    useEffect(()=>{
        if (timerStarted === true){
            //const savedTime = sessionTimer
            
        }
        
    },[])

    // When the timer page is triggered, the global context, TimeContext's 'onPage' state is set to true. 
    // Use this state to control -> unload the "sessionTimer" information into the current timer, and set the progress bar state. 
    // or if sessionTimer is 0, then proceed as normal with all values set to default of 0



    // useEffect() -> detects changes in seconds value to re-render progress bar
    useEffect(()=>{
        let elapsedSeconds = convertSeconds(seconds,minutes,hours,days)
        let totalSeconds = convertSeconds(0, inputTime)
        const newSession = {
            elapsedSeconds: elapsedSeconds,
            totalSeconds: totalSeconds, 
            elapsedMinutes: 0, 
            totalMinutes: inputTime}
        setGlobalTime(elapsedSeconds)
        setSessionTimer(newSession)
        setSecond(elapsedSeconds)
        setTotalSecond(totalSeconds)
        console.log('in TimerComp.jsx, the sessionTimer', sessionTimer)

    }, [seconds, minutes, hours, days])

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

    // convertSeconds() -> converting input time  information to seconds so it displays in the progress bar
    function convertSeconds(seconds = 0, minutes = 0, hours = 0, days = 0){
        return seconds + minutes * 60 + hours * 60 * 60 + days * 24 * 60 * 60
    }

    // changeTimer() -> toggles between the timer being on and off
    function changeTimer(){
        setTimerToggle(-timerToggle)
        timerToggle < 0 ?  start() : pause() 
    }

    return (
        <>
            <div style={{textAlign: 'center'}}>
                <h1>Timer</h1>
                <div style={{fontSize: '100px', display:'flex', justifyContent: 'center'}}>
                    <ProgressBar
                        radius={55}
                        transition={'1s ease'}
                        counterClockwise={true}
                        inverse={true}
                        progress={second}
                        steps={totalSecond}
                        />
                    <div className='digital-timer'>
                    {(hours) ? <span>{twoDigits(hours)}</span>: <span></span>}<span>{twoDigits(minutes)}</span>:<span>{twoDigits(seconds)}</span>
                    </div>
                </div>
                <p>{isRunning ? 'Running' : 'Not running'}</p>
                <button onClick={changeTimer}>{timerToggle > 0 ? 'Pause' : 'Start'}</button>
                <button onClick={() => setTimerComp(inputTime)}
                    >Set</button>
            </div>
        </>
    );
}

