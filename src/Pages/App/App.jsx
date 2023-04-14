import React from 'react'
import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import Dashboard from '../Dashboard/Dashboard';
import { getUser } from '../../utilities/users-service'


export default function App() {
    const [user, setUser] = useState(getUser())


    return (
        <div className="App">
            <h1>hey0?</h1>
            {user ?
                <Routes >
                    <Route path='/dash' element={<Dashboard user={user} setUser={setUser}/>}></Route>
                </Routes>
                :
                <AuthPage setUser={setUser}/>
            }
        </div>
    )
}

