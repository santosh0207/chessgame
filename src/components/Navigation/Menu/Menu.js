import React from 'react'
import classes from './menu.module.css'
export default function Menu(props) {
    return (
        <div className ={classes.menu} onClick ={props.toggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
