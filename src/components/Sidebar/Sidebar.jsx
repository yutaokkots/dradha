import React from 'react'
import Logout from '../../components/auth/Logout/Logout'

export default function Sidebar({user, setUser}) {
  return (
    <>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <span className="fs-4">Sidebar</span>
            </a>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" >Dashboard</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link active" >Timers</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link active" >Intents</a>
                </li>
            </ul>
        </div>
        <Logout user={user} setUser={setUser}/>
    </>
  )
}
