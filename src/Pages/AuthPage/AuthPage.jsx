import React from 'react'
import { useState } from 'react'
import SignUpForm from '../../components/authComponents/SignUpForm'
import LoginForm from '../../components/authComponents/LoginForm'
import ToggleButton from '../../components/authComponents/ToggleButton'

//import logo from "../../assets/logos/dradha_logo.png"
// import logo from "https://i.imgur.com/bg0EkMW.png"


export default function AuthPage({setUser}) {
    const [toggle, setToggle] = useState(1)

    function handleToggle(){
      setToggle(-toggle)
    }
  
    return (
        <div className="flex items-center justify-center h-screen bg-vanilla">
          <div className="w-full max-w-sm ">
            <div className="w-full mt-20 flex justify-center">
              <img className="" src='https://i.imgur.com/bg0EkMW.png' width="250rem" alt="Logo" />
            </div>
            <div className="bg-cardamom text-vanilla md:w-{5/6} rounded-lg p-10 mt-10 mb-20 overflow-hidden shadow-xl">
              {toggle > 0 ? (
                <SignUpForm setUser={setUser} />
              ) : (
                <LoginForm setUser={setUser} />
              )}
              <ToggleButton toggler={handleToggle} toggleState={toggle} />
            </div>
          </div>
        </div>
      );
    }

