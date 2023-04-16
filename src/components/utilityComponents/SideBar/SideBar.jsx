import React from 'react'
import LogoutButton from '../../authComponents/LogoutButton'
import Clock from '../../timerComponents/Clock/Clock'

export default function SideBar({user, setUser}) {
  return (
    <>
        <Clock />
        <LogoutButton user={user} setUser={setUser} />
    </>
  )
}
