import React, { useState, } from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch } from '../app/hooks';
import { useNavigate } from 'react-router-dom'
import { addRecepieToMyRecipePage, addRecepieToTheHomePage } from '../app/store/slices/authSlice';
import './addRecipe.css'
import { IRecepie } from '../interfaces/interfaces';



export default function AddRecipeForm() {
    const [title, setTitle] = useState<string>('')
    const [photoLink, setPhotoLink] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [list, setList] = useState<string[]>([]);
    const [ingredient, setIngredient] = useState<string>('')
    const [isChecked, setIsChecked] = useState(false);


    const dispatch = useAppDispatch();
    const navigate = useNavigate()



    async function handleFormSubmition(e: React.FormEvent) {
        e.preventDefault()

        if (title.trim(), photoLink.trim(), description.trim() !== '' && list.length > 0 && isChecked===true) {
            alert("Thank you for sharing your recipe with us!")
            const newRecepi: IRecepie = {
                id: nanoid(),
                title: title,
                img: photoLink,
                description: description,
                ingredients: list,
            };
            dispatch(addRecepieToTheHomePage(newRecepi));
            navigate("/")
        } else if (title.trim(), photoLink.trim(), description.trim() !== '' && list.length > 0 && isChecked===false) {
            const myRecepi: IRecepie = {
                id: nanoid(),
                title: title,
                img: photoLink,
                description: description,
                ingredients: list,
            };
            dispatch(addRecepieToMyRecipePage(myRecepi))
            navigate("/myrecipe")
        } else {
            alert("Please fill all the fields")
        }

    }


    function handleAddIngredient() {
        if (ingredient.trim() !== '') {
            setList([...list, ingredient]);
            setIngredient('');
        }
    }

    function handleDelete(index: number) {
        console.log(index)
        let updatedList = list.filter((_, i) => i !== index);
        console.log(updatedList)
        setList(updatedList)
    }

    function handleDeleteOfAllIng() {
        setList([]);
    }

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };


    return (
        <>
            <form className="addRecipeForm">
                <div className='formTofile'>
                    <label>
                        Recipe Title:
                        <br />
                        <input className="recipeName" type="text" value={title} onChange={event => setTitle(event.target.value)} />
                    </label>
                    < br />
                    <label>
                        Photo Link:
                        <br />
                        <input className='photoLink' type="text" value={photoLink} onChange={event => setPhotoLink(event.target.value)} />
                    </label>
                    <br />
                    <label>
                        Descriptin:
                        <br />
                        <textarea className="recipeDescription" value={description} onChange={event => setDescription(event.target.value)} />
                    </label>
                    <br />
                    <section className='listOfIngredient'>
                        <label>
                            Ingredients:
                            <br />
                            <input type="text" className="recipeIngredient" value={ingredient} onChange={event => setIngredient(event.target.value)} />
                            <button type="button" onClick={handleAddIngredient} className='addIngredientBtn'>
                                + Add
                            </button>
                        </label>
                        <ul className='displayIngredient'>
                            {list.map((item, index) => (

                                <div className='possibilityToDelIngr' key={nanoid()}>
                                    <li >{item}</li>
                                    <button className='deleteIngrBtn' onClick={() => handleDelete(index)}>x</button>
                                </div>



                            ))}
                            <button className='deleteAllIngBtn' onClick={handleDeleteOfAllIng}>Delete all added ingredient</button>
                        </ul>
                    </section>
                </div>
                <label className='checkbox'>
                    <input type="checkbox"
                        checked={isChecked}
                        onChange={handleOnChange} />
                    Make it available for all users
                </label>
                <br />
                <input type="submit" className='addRecipeSubmitBtn' onClick={handleFormSubmition} />
            </form>

        </>
    )
}
