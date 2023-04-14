import React from 'react'

export default function ToggleButton({toggler, toggleState}) {
  function handleClick(evt){
    evt.preventDefault()
    toggler()
  }
  return (
    <>
        <button
            onClick={handleClick}
        >{toggleState > 0 ? 'Already registered? Log in' : 'New User? Sign up'}</button>
    </>
  )
}