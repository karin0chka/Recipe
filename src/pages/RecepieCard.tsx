import React, { useState } from "react"
import { IRecepie } from "../interfaces/interfaces"
import "./recepieCard.css"
import { useSelector } from "react-redux"
import { selectAuthenticatedUser } from "../app/store/slices/selectors"
import { useAppDispatch } from "../app/hooks"
import { addFavoriteRec, deleteFavoriteRec } from "../app/store/slices/authSlice"



export default function RecepieCard(props: { recepie: IRecepie }) {
    const [showMore, setExpandedText] = useState(false)

    // const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const user = useSelector(selectAuthenticatedUser)

    function handeleClick() {
        setExpandedText(!showMore)
    }

    function handeleFavorite() {
        if (!user) return
        const isRecipeInFavorites = user.favorite?.includes(props.recepie.id)

        if (!isRecipeInFavorites) {
            dispatch(addFavoriteRec({ id: user.id, recipeId: props.recepie.id }));
        } 
        
        if(isRecipeInFavorites) {
            dispatch(deleteFavoriteRec({ id: user.id, recipeId: props.recepie.id }))
        }
    }

    return (
        <>


            <div className="homePageCard">
                <img src={props.recepie.img} className="recepieImg" />
                <section className="likeRec">
                    <h2 className="recepieTitle">{props.recepie.title}</h2>
                    {
                        user &&
                        <div className="heartPlacement">
                            <div className={`heartBut ${user.favorite.includes(props.recepie.id) ? 'is-active' : ''}`} onClick={handeleFavorite}></div>
                        </div>
                    }
                </section>
                <div className="listWrapper">
                    <ul className={`ingridientsList ${showMore ? 'expanded' : ''}`}>
                        <p>{props.recepie.description}</p>
                        <em>Ingridients</em>
                        {props.recepie.ingredients.map((ing, i) =>
                            <li key={ing + i}>{ing}</li>
                        )}
                    </ul>
                    <button className="readIngridients" onClick={handeleClick}>
                        {showMore ? 'Read less' : 'Read more'}
                    </button>
                </div>
            </div>

        </>

    )
}