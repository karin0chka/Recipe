import React, { useState } from "react"
import { IRecepie } from "../interfaces/interfaces"
import "./recepieCard.css"
import { useDispatch, useSelector } from "react-redux"
import { selectAuthenticatedUser } from "../app/store/slices/selectors"
import { addFavoriteRec } from "../app/store/slices/actions"
import { deleteFavoriteRec } from "../app/store/slices/actions"
import { useNavigate } from "react-router-dom"

export default function RecepieCard(props: { recepie: IRecepie }) {
    const [showMore, setExpandedText] = useState(false)

    // const navigate = useNavigate()

    const dispatch = useDispatch()

    const user = useSelector(selectAuthenticatedUser)

    function handeleClick() {
        setExpandedText(!showMore)
    }

    function handeleFavorite() {
        if (!user) return
        const isRecipeInFavorites = user.favorite.includes(props.recepie.id)
        if (!isRecipeInFavorites) {
            dispatch(addFavoriteRec(user.id, props.recepie.id))
        } else {
            dispatch(deleteFavoriteRec(user.id, props.recepie.id))
        }
    }

    return (

        <div className="homePageCard">
            <img src={props.recepie.img} className="recepieImg" />
            <section className="likeRec">
                <h2>{props.recepie.title}</h2>
                {
                    user &&
                    <div className="heartPlacement">
                        <div className={`heartBut ${user.favorite?.includes(props.recepie.id) ? 'is-active' : ''}`} onClick={handeleFavorite}></div>
                    </div>
                }
            </section>
            <div className="listWrapper">
                <ul className={`ingridientsList ${showMore ? 'expanded' : ''}`}>
                    <p>{props.recepie.description}</p>
                    <em>Ingridients</em>
                    {props.recepie.ingridients.map((ing, i) =>
                        <li key={ing + i}>{ing}</li>
                    )}
                </ul>
                <button className="readIngridients" onClick={handeleClick}>
                    {showMore ? 'Read less' : 'Read more'}
                </button>
            </div>
        </div>

    )
}