import React from 'react'
import classes from './header.module.css';
import Menu from '../Navigation/Menu/Menu'

export default function Header() {
    
    return (
        <div className={classes.Header}>
            <Menu />
            <p>logo</p>
            <p>Navigation</p>
        </div>
    )
}
