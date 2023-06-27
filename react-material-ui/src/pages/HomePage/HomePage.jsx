import React, { useContext, useReducer, useState } from "react"
import './style.css'
import style from './home.module.css'
import { Link } from "react-router-dom"
import { UserActions } from "../../misc/Constants"
import { Store } from "../../App"
import { login } from "../../misc/requests"



const reducer = (state, action)=>{
    switch(action.type){
        case UserActions.NAME:
            return {...state, name: action.data}
        default:
            return state
    }
}

export default function HomePage ({name, age}){
    const [counter, setCounter] = useState(0)
    const [user, dispatch] = useReducer(reducer, {name: '', age: '', tall: false})

    function handleClick(type){
        switch(type){
            case 'increment':
                return setCounter(counter+10)
            case 'decrement':
                return setCounter(counter-10)
            default: 
                return
        }
    }

    const store = useContext(Store)
    
    login(45).then(res=>{
        console.log(res)
    })

    return (
        <div className={`${style.homeContainer} hot`}>
            <h1>{store.user.name}</h1>   

            <button onClick={()=>store.dispatch({type: UserActions.NAME, data: 'Emmanuel'})}>set name to Josh</button>
            <button onClick={()=>handleClick('decrement')}>Decrement 10</button>
            <h2>Home</h2>
        </div>
    )
}
