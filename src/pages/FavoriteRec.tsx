import React, { useMemo } from "react"
import { IRecepie, IUser } from "../interfaces/interfaces"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import RecepieCard from "./RecepieCard"
import "./favorite.css"
import { selectAuthenticatedUser, selectListOfRecipes } from "../app/store/slices/selectors"


export default function FavoriteRec() {

    const user = useSelector(selectAuthenticatedUser)
    const listOfRecipes = useSelector(selectListOfRecipes)

    const listOfFavorites = useMemo(() => listOfRecipes.filter((recp) => user?.favorite.includes(recp.id)), [user?.favorite, listOfRecipes])
    console.log(listOfFavorites)

    return (

        <div className="favoriteListWrapper">
            {
                listOfFavorites.map((card) => {
                    return (
                        <div className="favoriteCard"  key={card.id}>
                            <RecepieCard recepie={card} />
                        </div>
                    )
                })
            }
        </div>



    )
}