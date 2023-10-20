import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import './login.css'
import { loginUserThunk, loginUserlogic } from '../app/store/slices/actions'


// dispatch is the fundamental method of updaiting a Redux store state



export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault()

        dispatch(loginUserlogic( email, password ));
        navigate("/");

    }
    function openRegistrationPage() {
        navigate("/register")
    }




    return (
        <>
            <section className='loginWrapper'>
                <form onSubmit={handleLogin} className='loginFrame'>
                    <input className='loginEmailInput' type="text" value={email} onChange={event => setEmail(event.target.value)} />
                    <input className='loginPasswordInput' type="password" value={password} onChange={event => setPassword(event.target.value)} />
                    <a href="#" onClick={openRegistrationPage}>
                        I don't have an account
                    </a>
                    <button className='loginBtn ' type="submit" >Login</button>
                </form>
            </section>
        </>



    )
}