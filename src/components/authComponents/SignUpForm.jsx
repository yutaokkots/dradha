import React, { Component } from 'react'
import { signUp } from '../../utilities/users-service'

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };

    handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const formData = {...this.state}
            delete formData.error
            delete formData.confirm
            const user = await signUp(formData)
            this.props.setUser(user)
            
        } catch {
            this.setState({error: 'Error in Signing Up - try again'})
        }
    }

    handleChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value, error: '' })
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
        <div>
            <div className="rounded-md m-5">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
                <div className='relative flex-row justify-between  mt-2 mb-2'>
                    <div><label>Name</label></div>
                    <div><input className='text-cardamom' type="text" name="name" value={this.state.name} onChange={this.handleChange} required /></div>
                </div>
                <div className='relative flex-row justify-between  mt-2 mb-2'>
                    <div><label>Email</label></div>
                    <div><input className='text-cardamom' type="email" name="email" value={this.state.email} onChange={this.handleChange} required /></div>
                </div>

                <div className='relative flex-row justify-between  mt-2 mb-2'>
                    <div><label>Password</label></div>
                    <div><input className='text-cardamom' type="password" name="password" value={this.state.password} onChange={this.handleChange} required /></div>
                </div>
                <div className='relative flex-row justify-between  mt-2 mb-2'>
                    <div><label>Confirm</label></div>
                    <div><input className='text-cardamom' type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required /></div>
                </div>
                <button className=' text-cardamom bg-vanilla hover:bg-land hover:text-vanilla py-1 px-1 rounded mt-5 mb-5' type="submit" disabled={disable}>SIGN UP</button>
            </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
        );
    }
}

{/* <div className="rounded-md m-5">
<form autoComplete="off" onSubmit={handleSubmit}>
<div className='relative flex-row justify-between  mt-2 mb-2'>
    <div><label>Email</label></div>
    <div><input className='' type="text" name="email" value={credentials.email} onChange={handleChange} required /></div>
</div>
<div className='relative  flex-row justify-between'>
    <div><label>Password</label></div>
    <div><input type="password" name="password" value={credentials.password} onChange={handleChange} required /></div>
</div>
<button className=' text-cardamom bg-vanilla hover:bg-land hover:text-vanilla py-1 px-1 rounded mt-5 mb-5' type="submit">LOG IN</button>
</form>

<p className="error-message">&nbsp;{error}</p>
</div> */}

