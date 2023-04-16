import React from 'react'
import {useState} from 'react'
// possibly install react slider


export default function TimerInput({ setTimer }) {
    const [input, setInput] = useState(0)

    function handleChange(evt){
        setInput(evt.target.value)
        setTimer(evt.target.value)
    }   

    // function handleSubmit(evt){
    //     evt.preventDefault()
    //     console.log(input)
    //     setTimer(input)
    // }

  return (
    <>
        <div style={{border:'1px solid rgb(99, 255, 71)'}}>
            <div>TimerInput</div>
            {/* <form
                onSubmit={handleSubmit}> */}
                <input 
                    type='number' 
                    value={input}
                    onChange={handleChange} 
                    placeholder="enter Seconds"
                    required
                    ></input>
                {/* <button 
                    type='submit' 
                    >Submit</button>
            </form> */}
        </div>
    </>
  )
}
