import React from 'react'
import { useSelector } from 'react-redux'
import { selectListOfUsersRecipes } from '../app/store/slices/selectors'
import { IRecepie, IUser } from '../interfaces/interfaces'
import RecepieCard from '../pages/RecepieCard'

export default function MyRecipe() {
    const userRecipe = useSelector(selectListOfUsersRecipes)
    console.log(userRecipe)
    return (
        <div className="myRecipeContainer">


            {
                userRecipe.map((card) => {
                    return (

                        <RecepieCard key={card.id} recepie={card} />
                    )
                }
                )
            }

        </div>
    )
}

