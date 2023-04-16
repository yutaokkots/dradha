import React from 'react'
import {useState} from 'react'
// possibly install react slider


export default function TimerInput({setTimer}) {
    const [input, setInput] = useState(null)

    function handleChange(evt){
        setInput(evt.target.value)
    }   

    function handleSubmit(input){
        setTimer(input)
    }

  return (
    <>
        <div style={{border:'1px solid rgb(99, 255, 71)'}}>
            <div>TimerInput</div>
            <form
                onSubmit={handleSubmit}>
                <input 
                    type='number' 
                    value={input}
                    onChange={handleChange} 
                    placeholder="enter Seconds"
                    ></input>
                <button 
                    type='submit' 
                    >Submit</button>
            </form>
        </div>
    </>
  )
}
