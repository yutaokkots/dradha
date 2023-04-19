import React, { useState, useEffect, useContext }  from 'react'
import { useTimer } from 'react-timer-hook';
import ProgressBar from 'react-customizable-progressbar'
import { TimeContext } from '../../../Pages/Dashboard/Dashboard'

const expiryTimestamp = 20

export default function TimerComp({inputTime, timerRef, setGlobalTime, timerOn}) {
    // useContext variables declared to set and get the global variables in TimeContext
    const {sessionTimer, setSessionTimer} = useContext(TimeContext)

    // declaring useTimer values to be used in this component and child components
    const { seconds, minutes, hours, days, isRunning, 
        start, pause, resume, restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    // useState variables declared for setting the time displayed in the progressbar?
    const [second, setSecond] = useState(0)
    const [totalSecond, setTotalSecond] = useState(0)
    const [timerToggle, setTimerToggle] = useState(1)

    useEffect(()=>{
        
    })

    useEffect(()=>{
        console.log('mounted in: Dashboard>Timers>Meditation>TIMERCOMP>ProgressBar')
        return console.log('unmounted in: Dashboard>Timers>Meditation>TIMERCOMP>ProgressBar')
    },[])

    // useEffect() -> detects changes in seconds value to re-render progress bar
    useEffect(()=>{
        setGlobalTime(convertSeconds(seconds,minutes,hours,days))
        setSessionTimer(convertSeconds(seconds,minutes,hours,days))
        setSecond(convertSeconds(seconds,minutes,hours,days))
        setTotalSecond(convertSeconds(0, inputTime))
        console.log('in TimerComp.jsx, the sessionTimer', sessionTimer)
    }, [seconds, minutes, hours, days])

    // twoDigits() -> changes the single digit time values to double digits
    function twoDigits(singleDigit){
        if (singleDigit.toString().length === 1) return `0${singleDigit}`
        else return singleDigit
    }

    // sets the user input, in min, to the time that the timer runs
    function setTimerComp(inputTime){
        let seconds = timerOn ? timerRef : inputTime * 60
        const time = new Date();
        time.setSeconds(time.getSeconds() + seconds);
        timerOn = true
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

