import React from 'react'

export default function ToggleButton({toggler, toggleState}) {
    function handleClick(evt){
        evt.preventDefault()
        toggler()
      }
      return (
        <>
            {toggleState > 0 ? 'Already registered?' : 'New User?'}<span> </span>
            <button
                className="hover:bg-sunset"
                onClick={handleClick}
            >{toggleState > 0 ? 'Log in' : 'Sign up'}</button>
        </>
      )
}
