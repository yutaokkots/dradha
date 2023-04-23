import React from 'react'
import { logOut } from '../../utilities/users-service' 

export default function Logout({ user, setUser }) {
  
    function handleLogOut() {
        logOut();
        setUser(null);
    }

    return (
        <div className="UserLogOut">
            <div>hello, {user.name}</div>
            <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
        </div>
    );
}
