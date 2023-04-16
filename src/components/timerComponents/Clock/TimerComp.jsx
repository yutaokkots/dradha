import React from 'react'
import { useTimer } from 'react-timer-hook';
import { useState } from 'react'
import ProgressBar from 'react-customizable-progressbar'


const expiryTimestamp = 20

export default function TimerComp({inputTime}) {
    const { seconds, minutes, hours, days, isRunning, 
        start, pause, resume, restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    const [timerToggle, setTimerToggle] = useState(1)

    function twoDigits(singleDigit){
        if (singleDigit.toString().length === 1) return `0${singleDigit}`
        else return singleDigit
    }

    function setTimerComp(inputTime){
        console.log(inputTime*60)
        let seconds = inputTime * 60
        const time = new Date();
        time.setSeconds(time.getSeconds() + seconds);
        restart(time)
    }

    return (
        <>

             <ProgressBar
                radius={50}
                progress={() => convertSeconds(seconds, minutes, hours)}
                steps={300}
                />

            <div style={{textAlign: 'center'}}>
            <h1>Timer</h1>
            <div style={{fontSize: '100px'}}>
                {(hours) ? <span>{twoDigits(hours)}</span>: <span></span>}<span>{twoDigits(minutes)}</span>:<span>{twoDigits(seconds)}</span>
            </div>
            <p>{isRunning ? 'Running' : 'Not running'}</p>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={() => setTimerComp(inputTime)}
                >Restart</button>
            </div>
        </>
    );
}

