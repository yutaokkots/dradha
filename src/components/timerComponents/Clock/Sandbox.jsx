import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useTimer } from 'react-timer-hook';
// import ProgressBar from 'react-customizable-progressbar'

// const initialTimerObject = {
//     seconds: null,
//     minutes: null,
//     hours: null,
//     days: null
// }

//state will cause you to enter into an infinite loop
// refs does not cause the component to change


export default function Sandbox() {
    const [name, setName] = useState('')
    const renderCount = useRef(-1)
    const inputRef = useRef(1)

    useEffect(() => {
        renderCount.current = renderCount.current + 1
        console.log(inputRef.current)

    }, [])
      return (
            <>
                <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
                <div>my name is {name}</div>
                <div>this is rendered {renderCount.current} times</div>
                <button onClick={focus}>Focus</button>
            </>
      );
    }