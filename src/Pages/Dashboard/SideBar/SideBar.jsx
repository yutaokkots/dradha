import React from 'react'
import LogoutButton from '../../../components/authComponents/LogoutButton'

export default function SideBar({user, setUser}) {
  return (
    <>
        <LogoutButton user={user} setUser={setUser} />
    </>
  )
}
