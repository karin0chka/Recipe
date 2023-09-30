import React from 'react'
import { useDispatch } from 'react-redux'


export default function Logout() {
    const dispatch = useDispatch()

    function handleLogout(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
       //dispatch(logoutUser())   
    }

    return (
        <>
            <button onClick={handleLogout}>Log Out</button>
        </>
    )
}