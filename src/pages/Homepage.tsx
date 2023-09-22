import React, { useState } from "react"
import { selectListOfRecipes } from '../app/store/slices/selectors'
import { useSelector } from "react-redux"
import { IRecepie } from "../interfaces/interfaces"
import RecepieCard from "./RecepieCard"
import "./recepieCard.css"


export default function Homepage() {
    const recipe = useSelector(selectListOfRecipes)

    return (
        <>
        <div className="homePageCardContainer">
            {
                  recipe.map((card: IRecepie) => {
                    return (
                    
                        <RecepieCard key={card.id} recepie={card} />
                    )
                }
                )
            }

        </div>
        </>


    )
}