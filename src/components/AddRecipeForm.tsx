import React, { useState } from 'react'
import { useAppDispatch } from '../app/hooks';
import { useNavigate } from 'react-router-dom'
import { addRecepieLogic } from '../app/store/slices/actions';
import './addRecipe.css'


export default function AddRecipeForm() {
    const [title, setTitle] = useState<string>('')
    const [photoLink, setPhotoLink] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [list, setList] = useState<string[]>([]);
    const [ingredient, setIngredient] = useState<string>('')


    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    async function handleFormSubmition(e: React.FormEvent) {
        e.preventDefault()
        let newRecipe = await dispatch(addRecepieLogic(title, photoLink, description, list));
        console.log(newRecipe)
        if (title.trim(), photoLink.trim(), description.trim() !== '' && list.length > 0) {
            alert("Thank you for sharing your recipe with us!")
            navigate("/")
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
        let updatedList = list.filter((_, i) => i !== index);
        setList(updatedList)
    }

    function handleDeleteOfAllIng() {

    }

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

                                <div className='possibilityToDelIngr' key={index + "ingredient"}>
                                    <li >{item}</li>
                                    <button className='deleteIngrBtn' onClick={() => handleDelete(index)}>x</button>
                                </div>



                            ))}
                            {/* <button className='deleteAllIngBtn' onClick={handleDeleteOfAllIng}>Delete all added ingredient</button> */}
                        </ul>
                    </section>
                </div>
                <label className='checkbox'>
                    <input type="checkbox" />
                    Make it available for all users
                </label>
                <br />
                <input type="submit" className='addRecipeSubmitBtn' onClick={handleFormSubmition} />
            </form>

        </>
    )
}
