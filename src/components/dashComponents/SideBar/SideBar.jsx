import React from 'react'
import LogoutButton from '../../authComponents/LogoutButton'

export default function SideBar({user, setUser}) {
  return (
    <>
        <LogoutButton user={user} setUser={setUser} />
    </>
  )
}
