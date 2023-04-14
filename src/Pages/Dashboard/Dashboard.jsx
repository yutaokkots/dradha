import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'


export default function Dashboard({user, setUser}) {
  return (
    <main>
        <Sidebar user={user} setUser={setUser}/>
        <div className='offcanvas'>
            
        </div>
        <div>
            <div>Dashboard</div>
        </div>
        

    </main>
  )
}
