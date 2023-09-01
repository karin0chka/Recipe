import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from './slices/authSlice'

// dispatch is the fundamental method of updaiting a Redux store state



export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    
    function handleLogin(e: React.FormEvent){
        e.preventDefault()
        dispatch(logIn())
    }


    return (
        <div className='form'>
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
                    </label>
                <button type="submit">Sign In</button>
            </form>

        </div>
    )
}