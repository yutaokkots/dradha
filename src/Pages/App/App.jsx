import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import './App.css'
import AuthPage from '../AuthPage/AuthPage'

function App() {
  const [user, setUser] = useState(false)
  
  function updateUser(userState){
    setUser(userState)
  }

  return (
    
    <main className="App">
        <h1>Dashboard should shown below</h1>
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
