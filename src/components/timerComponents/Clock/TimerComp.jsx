import React, { useState, useEffect }  from 'react'
import { useTimer } from 'react-timer-hook';
import ProgressBar from 'react-customizable-progressbar'


const expiryTimestamp = 20

export default function TimerComp({inputTime}) {
    const { seconds, minutes, hours, days, isRunning, 
        start, pause, resume, restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    const [second, setSecond] = useState(0)
    const [totalSecond, setTotalSecond] = useState(0)

    useEffect(()=>{
        setSecond(convertSeconds(seconds,minutes,hours,days))
        setTotalSecond(convertSeconds(0, inputTime))
        console.log(second)
        console.log(totalSecond)
    }, [seconds, minutes, hours, days])

    function twoDigits(singleDigit){
        if (singleDigit.toString().length === 1) return `0${singleDigit}`
        else return singleDigit
    }

    // sets the user input, in min, to the time that the timer runs
    function setTimerComp(inputTime){
        console.log(inputTime*60)
        let seconds = inputTime * 60
        const time = new Date();
        time.setSeconds(time.getSeconds() + seconds);
        restart(time)
    }

    //   progress bar
    // converting input time  information to seconds so it displays in the progress bar
    function convertSeconds(seconds = 0, minutes = 0, hours = 0, days = 0){
        return seconds + minutes * 60 + hours * 60 * 60 + days * 24 * 60 * 60
    }

    // convertSeconds(seconds, minutes, hours)
    // convertSeconds(0, inputTime)
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

