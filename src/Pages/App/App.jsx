import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import AuthPage from '../AuthPage/AuthPage'
import { getUser } from '../../utilities/users-service'
import './App.css'

const initialUser = {name: "devUser", email:"123@dev.com"}
//getUser()

function App() {
  const [user, setUser] = useState(initialUser)

  // for dev
  let devUser = true
  

  function updateUser(userState){
    setUser(userState)
  }
  return (
      <main className="App">
          {devUser?
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
