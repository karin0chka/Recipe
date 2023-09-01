import { useState } from 'react'
import { useDispatch } from 'react-redux'


export default function Registration(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleRegistration(){
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
        alert('Thank you for joining our tasty community')
    }

    return(
        <>
        <h2>Register to cook with us</h2>
        <form onSubmit={handleRegistration}>
            <label>
                Email:
                <input type="email" value={username} onChange={(e)=> setUsername(e.target.value)}/>
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button>Create account</button>
        </form>
        </>
    )
}