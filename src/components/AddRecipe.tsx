import React from "react"
import { useNavigate } from 'react-router-dom'
import "./addRecipe.css"
import { useSelector } from "react-redux"
import { selectAuthenticatedUser } from "../app/store/slices/selectors"

export default function AddRecipe() {

    const navigate = useNavigate()
    const user = useSelector(selectAuthenticatedUser)

    function goToAddResepieForm() {
        if(user){
            navigate("/addrecipe")
        }else{
            navigate("/login")
        }
    }

   
    return (
        <>
            <button className="addRecipeButton" onClick={goToAddResepieForm}>
                <img height="48" width="70" src="/public/icons/addIcon.png"
                   className="addIconPosition" />
            </button>
        </>
    )

}