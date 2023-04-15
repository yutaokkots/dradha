import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import AuthPage from '../AuthPage/AuthPage'
import { getUser } from '../../utilities/users-service'

import './App.css'


function App() {
  const [user, setUser] = useState(getUser())
  
  function updateUser(userState){
    setUser(userState)
  }

  return (
    
    <main className="App">
      <h1>finished coding backend config and models for user</h1>
      <h1>wrote out controllers and models</h1>
      <h1>imported server.js</h1>
        <h1>Successfully imported getuser()</h1>
        <h1>Dashboard should should be shown below</h1>
         {user?
                <>
                
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    
                </Routes>
                </> 
                :
                <AuthPage setUser={updateUser}/>
            }
  </main>


  )
}

export default App
