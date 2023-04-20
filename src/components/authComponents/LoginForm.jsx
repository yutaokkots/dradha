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
            <div class="rounded mt-20">


                    <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className='relative flex flex-row justify-between'>
                        <label>Email</label>
                        <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
                    </div>
                    <div className='relative flex flex-row justify-between'>
                        <label>Password</label>
                        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    </div><button type="submit">LOG IN</button>
                    </form>

                <p className="error-message">&nbsp;{error}</p>
            </div>
        
        </>
    )
}
