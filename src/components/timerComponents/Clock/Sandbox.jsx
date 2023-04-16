// import React from 'react'
// import { useState } from 'react'
// import { useTimer } from 'react-timer-hook';
// import ProgressBar from 'react-customizable-progressbar'

// const initialTimerObject = {
//     seconds: null,
//     minutes: null,
//     hours: null,
//     days: null
// }

// export default function Meditation() {


//       return (
//         <div style={{textAlign: 'center'}}>
//           <h1>react-timer-hook </h1>
//           <p>Timer Demo</p>
//             <ProgressBar
//                 radius={50}
//                 progress={() => convertSeconds(seconds, minutes, hours)}
//                 steps={300}
//                 />
//           <div style={{fontSize: '100px'}}>
//             <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
//           </div>
//           <p>{isRunning ? 'Running' : 'Not running'}</p>
//           <button onClick={start}>Start</button>
//           <button onClick={pause}>Pause</button>
//           <button onClick={resume}>Resume</button>
//           <button onClick={setTime}>Restart</button>
//         </div>
//       );
//     }