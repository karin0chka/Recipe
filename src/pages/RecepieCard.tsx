import React, { useState } from "react"
import { IRecepie } from "../interfaces/interfaces"
import "./recepieCard.css"

export default function RecepieCard(props: { recepie: IRecepie }) {
    const [showMore, setExpandedText] = useState(false)
    function handeleClick() {
        setExpandedText(!showMore)
    }
 
    return (
   
            <div className="homePageCard">
                <img src={props.recepie.img} className="recepieImg" />
                <h2>{props.recepie.title}</h2>
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