import React from 'react'
import { useState } from 'react'
import { login } from '../../utilities/users-service'


const initialState = {
    email: '',
    password: ''
}

export default function LoginForm({setUser}) {

    const [credentials, setCredentials] = useState(initialState);
    const [error, setError] = useState('');
    
    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
      }
    
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
          const user = await login(credentials);
          setUser(user);
        } catch {
          setError('Log In Failed - Try Again');
        }
    }

    return (
        <>
            <div className="rounded-md m-5">
                    <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className='relative flex-row justify-between  mt-2 mb-2'>
                        <div><label>Email</label></div>
                        <div><input className='text-cardamom' type="text" name="email" value={credentials.email} onChange={handleChange} required /></div>
                    </div>
                    <div className='relative  flex-row justify-between'>
                        <div><label>Password</label></div>
                        <div><input className='text-cardamom' type="password" name="password" value={credentials.password} onChange={handleChange} required /></div>
                    </div>
                    <button className=' text-cardamom bg-vanilla hover:bg-land hover:text-vanilla py-1 px-1 rounded mt-5 mb-5' type="submit">LOG IN</button>
                    </form>

                <p className="error-message">&nbsp;{error}</p>
            </div>
        
        </>
    )
}
