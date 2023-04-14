import React from 'react'
import { useState } from 'react'

const initialState = {
    name: '',       // Name of the user
    email: '',      // The email address of the user
    password: '',   // The user's password
    confirm: '',    // Used to confirm the password is entered correctly
    error: ''       // Used to display an error message if the sign up fails
  };

export default function SignUpForm() {
    const [credentials, setCredentials] = useState(initialState);
    
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        

    }


    // const handleSubmit = async (evt) => {
    //     evt.preventDefault();
    //     try {
    //         const formData = {...credentials}
    //         delete formData.error;
    //         delete formData.confirm;
    //         const user = await signUp(formData)
    //         // In <SignUpForm>, replace the console.log(user) with a call to the setUser function, passing to it user
    //         this.props.setUser(user)
    //         console.log(user)
    //     } catch {
    //         this.setState({error: 'Sign-up failed - try again'})
    //     }

    //     console.log(this.state)
    //     this.setState(this.state)
    // }

    // const handleChange = (evt) => {
    //     this.setState({
    //         [evt.target.name] : evt.target.value,
    //         error: ''
    //     })
    // }
    
    return (
        <>
            <div>
                <div className="form-container">
                    <form 
                        autoComplete="off" 
                        onSubmit={handleSubmit}>
                            <label>Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={credentials.name} 
                                onChange={handleChange} 
                                required />
                            
                            <label>Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={credentials.email} 
                                onChange={handleChange} 
                                required />
                            
                            <label>Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                value={credentials.password} 
                                onChange={handleChange} 
                                required />
                            
                            <label>Confirm</label>
                            <input 
                                type="password" 
                                name="confirm" 
                                value={credentialsconfirm} 
                                onChange={handleChange} 
                                required />
                            
                            <button type="submit" disabled={disable}>SIGN UP</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{credentials.error}</p>
            </div>
        </>
    )
}
