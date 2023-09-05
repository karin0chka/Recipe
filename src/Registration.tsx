import { useState } from 'react'
import { logIn } from './slices/authSlice'
import { useAppDispatch,useAppSelector } from './app/hooks'
import { registrationSuccess, registrationFailure } from './slices/regitrationSlice'
import   Logout  from './Logout'

export default function Registration() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // dispatch is the fundamental method of updaiting a Redux store state
    //also to dispatch action
    const dispatch = useAppDispatch()
    //useSelector to read data from store
    const isRegistered = useAppSelector((state) => state.registration.isRegistered)


    //localStorage is a web storage object that allows JavaScript sited and apps to keep kay-value pairs 
    //in a web browser(data survives page refreshes and browser restarts)
    //use it to be able to store and retrieve data in the browser 
    //setItem('key', value)
    function handleRegistration() {
        if (username && password) {
            dispatch(registrationSuccess())
            dispatch(logIn())
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            alert('Thank you for joining our tasty community')
        } else {
            dispatch(registrationFailure())
            alert(`Sorry,registration failed. Please provide valid data`)
        }
    }
    function registrationForm() {
        return (
            <>
                <form onSubmit={handleRegistration}>
                    <label>
                        Email:
                        <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} />
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
    return (
        <>
            <h2>Register to cook with us</h2>
            {isRegistered ? (<p>Good to have you here!<br />
            <Logout />
            </p>) : (registrationForm())}
        </>
    )
}