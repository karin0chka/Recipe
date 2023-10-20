import React, { useMemo } from "react"
import { useSelector } from 'react-redux'
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
            <h1 className="favPageTitle">
            <img height="90" width="100" src="/public/icons/fav-icon.png" />
            <br />
            My recipes
            </h1>
            {
                listOfFavorites.map((card) => {
                    return (
                        <div className="favoriteCard"  key={card.id}>
                            <section className="informWrapper">
                            <RecepieCard recepie={card} />       
                            </section>
                        </div>
                    )
                })
            }
        </div>



    )
}