import React from 'react'
import './App.css'
export default function Header(props) {
    return (
        <div className="bg-blue">
            <h1>header : {props.title}</h1>
        </div>
    )
}
