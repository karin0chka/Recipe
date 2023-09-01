import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from './slices/authSlice'

export default function Logout(){
    const dispatch = useDispatch()

    function handleLogout(event: React.MouseEvent<HTMLButtonElement>){
        event.preventDefault()
        dispatch(logOut())
    }

    return(
        <>
        <button onClick={handleLogout}>Log Out</button>
        </>
    )
}