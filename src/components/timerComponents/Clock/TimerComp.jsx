import React from 'react'
import { useTimer } from 'react-timer-hook';

const expiryTimestamp = 20

export default function TimerComp({inputTime}) {
    const { seconds, minutes, hours, days, isRunning, 
        start, pause, resume, restart,
    } = useTimer({inputTime, onExpire: () => console.warn('onExpire called') });

    function twoDigits(singleDigit){
        if (singleDigit.toString().length === 1) return `0${singleDigit}`
        else return singleDigit
    }
    return (
        <>
            <div style={{textAlign: 'center'}}>
            <h1>Timer</h1>
            <div style={{fontSize: '100px'}}>
                {(hours) ? <span>{twoDigits(hours)}</span>: <span></span>}<span>{twoDigits(minutes)}</span>:<span>{twoDigits(seconds)}</span>
            </div>
            <p>{isRunning ? 'Running' : 'Not running'}</p>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={() => {
                const time = new Date();
                time.setSeconds(time.getSeconds() + 300);
                restart(time)
            }}>Restart</button>
            </div>
        </>
    );
}

