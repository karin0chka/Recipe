import React, { useState } from 'react'
import { registerUserLogic } from '../app/store/slices/actions'
import './registration.css'
import { useAppDispatch } from '../app/hooks'
import { useNavigate } from 'react-router-dom'


export default function Registration() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repetedPassword, setRepetedPassword] = useState('')

    // dispatch is the fundamental method of updaiting a Redux store state
    //also to dispatch action
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    //useSelector to read data from store

    function handleRegistration(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (password === repetedPassword) {
            dispatch(registerUserLogic( username, email, password ))
            navigate("/")
        } else {
            alert("Sorry, your password does not match")
        }
        navigate("/")
    }

    function openLoginPage() {
        navigate("/login")
    }

    return (
        <>
            <section className='registerWrapper'>
                <form onSubmit={handleRegistration} className='registerFrame'>
                    <h1 className='registerFormTitle'>Register to cook with us</h1>

                    <input className='registerUsernameInput' type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />

                    <input className='registerEmailInput' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />

                    <input className='registerPasswordInput' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                    <input className='registerPasswordInput' type="password" placeholder='Repeat your password' value={repetedPassword} onChange={(e) => setRepetedPassword(e.target.value)} />
                    <a href="#" onClick={openLoginPage}>
                        Already have an account
                    </a>

                    <button className="registerFormSubmit" type="submit">Create account</button>
                </form>
            </section>
        </>
    )
}