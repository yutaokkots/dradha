import React from 'react'
import { useState } from 'react'
import SignUpForm from '../../components/authComponents/SignUpForm'
import LoginForm from '../../components/authComponents/LoginForm'
import ToggleButton from '../../components/authComponents/ToggleButton'

export default function AuthPage({setUser}) {
    const [toggle, setToggle] = useState(1)

    function handleToggle(){
      setToggle(-toggle)
    }
  
    return (
        <>
            { toggle > 0 
            ? 
            <SignUpForm setUser={setUser}/> 
            : 
            <LoginForm setUser={setUser} /> }
            
            <ToggleButton toggler={handleToggle} toggleState={toggle}/>
        </>
    )
}
