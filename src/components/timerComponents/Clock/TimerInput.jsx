import React from 'react'
import {useState} from 'react'

export default function TimerInput({ setTimer }) {
    const [input, setInput] = useState(0)

    function handleChange(evt){
        setInput(evt.target.value)
        setTimer(evt.target.value)
    }   

  return (
    <>
        <div style={{border:'1px solid rgb(99, 255, 71)'}}>
            <div>TimerInput</div>
                <input 
                    type='number' 
                    value={input}
                    onChange={handleChange} 
                    placeholder="enter Seconds"
                    required
                    ></input>
        </div>
    </>
  )
}
