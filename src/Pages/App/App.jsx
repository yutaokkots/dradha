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
          <h1>Testing for hot refresh</h1>
         {user?
                <>
                
                <Routes>
                    <Route path='/' element={<Dashboard user={user} setUser={setUser}/>} />
                    
                </Routes>
                </> 
                :
                <AuthPage setUser={updateUser}/>
            }
  </main>


  )
}

export default App
