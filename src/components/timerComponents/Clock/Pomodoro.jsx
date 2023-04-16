import React from 'react'
import TimerInput from './TimerInput';
import TimerComp from './TimerComp';


export default function Pomodoro() {
  return (
      <div style={{textAlign: 'center'}}>
            <div>Pomodoro</div>
      <h2></h2>
      <TimerInput setTimer={resetTime}/>
      <TimerComp inputTime={customMedTime}/>
    </div>
  );  
}
