import React from 'react'
import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';


const initialUserState = ''

function App() {
    const [user, setUser] = useState(initialUserState)

    return (
        <div className="App">
            <h1>Hello!</h1>
            {user ?
                <Routes >
                    <Route></Route>
                    <Route></Route>
                </Routes>
                :
                <AuthPage />

            }


        </div>
    )
}

export default App
