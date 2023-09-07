import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'

interface PropsType{
    menu:boolean
}

export default function EmergeMenu(props:PropsType ) {
    const[stling, setStyling] = useState()
    const trueStyle = {
        position:"absolute",
        top:"0",
        rigth:"25px",
        fontSize:"36px",
        marginLeft:"50px",  
    }
    const defaultStyle = {
        height:"100%",
        width:"0",
        position:"fixed",
        zIndex:"1",
        top:"0",
        left:"0",
        overflowX:"hidden",
        transition:"0.5s",
        paddingTop:"60px"
    }
  
    return (
        <div>
            <Link className="" to="/">Home</Link>
            <Link className="" to="">Ratings</Link>
        </div>
    )
}