import React from "react"
import { useNavigate } from 'react-router-dom'
import "./addRecipe.css"

export default function AddRecipe() {

    const navigate = useNavigate()

    function goToAddResepieForm() {
        navigate("/addrecipe")
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