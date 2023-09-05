import React, { useState } from 'react'
import { useAppDispatch } from './app/hooks'
import { logIn } from './slices/authSlice'
import { registrationSuccess } from './slices/regitrationSlice'
import { useNavigate } from 'react-router-dom'

// dispatch is the fundamental method of updaiting a Redux store state



export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    function handleLogin(e: React.FormEvent) {
        e.preventDefault()
        const valueOfUsername = localStorage.getItem('username')
        const valueOfPassword = localStorage.getItem('password')
        if (username === valueOfUsername && password === valueOfPassword) {
            dispatch(logIn())
            dispatch(registrationSuccess())
        } else {
            alert('Sorry, you are yet not register with as please press "Create account" button to join our tasty community')
        }
    }
    function handleRegister() {
        navigate('/registration')
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
                <button type="button" onClick={handleRegister}>Create account</button>
            </form>

        </div>
    )
}