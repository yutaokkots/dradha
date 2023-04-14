import React from 'react'
import LoginForm from '../../components/auth/LoginForm/LoginForm'
import ToggleButton from '../../components/ToggleButton/ToggleButton'
import { useState } from 'react'
import SignUpForm from '../../components/auth/SignUpForm/SignUpForm'

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
