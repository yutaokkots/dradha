import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import AuthPage from '../AuthPage/AuthPage'
import { getUser } from '../../utilities/users-service'
// import './App.css'

const initialUser = {name: "devUser", email:"123@dev.com"}
//getUser()

function App() {
  const [user, setUser] = useState(getUser())

  // for dev
  //let devUser = true
  

  function updateUser(userState){
    setUser(userState)
  }
  return (
      <main className="App" >
        <div className='font-serif'>
          {user?
              <>
                  <Routes>
                      <Route path='/' element={<Dashboard user={user} setUser={setUser}/>} />
                  </Routes>

              </> 
              :
              <div >
                <AuthPage setUser={updateUser}/>
              </div>
          }
          </div>
      </main>
  )
}

export default App
