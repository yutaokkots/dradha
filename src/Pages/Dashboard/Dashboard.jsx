import React, { useState, useRef, useEffect } from 'react'
import SideBar from '../../components/utilityComponents/SideBar/SideBar'
import Timers from '../../components/utilityComponents/Timers/Timers'
//import Sandbox from '../../components/timerComponents/Clock/Sandbox'
import './Dashboard.css'



export default function Dashboard({user, setUser}) {
    const [activeMenuItem, setActiveMenuItem] = useState([0, 1, 2]);
    const dashMenuRef = useRef([0]);
    
    useEffect(() => {
        
    }, [dashMenuRef])

    return (
        <>
            <div className='window-main'>
                <div className='side-bar'>
                  <h1>Side Bar</h1>
                    <SideBar 
                        user={user} 
                        setUser={setUser}
                        setMenu={setActiveMenuItem}
                        />
                </div>

                <div className='main-section'>
                    {activeMenuItem === 0 &&
                        <div style={{border: '2px solid rgb(255, 99, 71)'}}>
                            <p style={{color: 'rgb(255, 99, 71)'}}>Timers.jsx in Dashboard</p>
                            <h1>Main Section</h1>
                            <Timers/>
                        </div>
                        }
                    {activeMenuItem === 1 &&
                    <div style={{border: '2px solid rgb(255, 99, 71)'}}>
                        <p style={{color: 'rgb(255, 99, 71)'}}>Timers.jsx in Dashboard</p>
                        <h1>Main Section</h1>
                        <Timers/>
                    </div>
                    }
                    {activeMenuItem === 2 &&
                    <div style={{border: '2px solid rgb(255, 99, 71)'}}>
                        <p style={{color: 'rgb(255, 99, 71)'}}>Timers.jsx in Dashboard</p>
                        <h1>Main Section</h1>
                        <Timers/>
                    </div>
                    }
                    
                </div>
            </div>
        </>
    
    )
}
