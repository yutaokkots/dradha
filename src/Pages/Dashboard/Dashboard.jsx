import React from 'react'
import SideBar from '../../components/dashComponents/SideBar/SideBar'

export default function Dashboard({user, setUser}) {
  return (
    <>
      <div>Dashboard</div>
      <SideBar user={user} setUser={setUser}/>
    </>
    
  )
}
