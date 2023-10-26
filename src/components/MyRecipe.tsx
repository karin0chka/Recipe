import React from 'react'
import { useSelector } from 'react-redux'
import { selectListOfUsersRecipes } from '../app/store/slices/selectors'

export default function MyRecipe(){
    const userRecipe = useSelector(selectListOfUsersRecipes)
    console.log(userRecipe)

  return (
    <div>MyRecipe</div>
  )
}

