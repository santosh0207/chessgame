import React from 'react'
import classes from './layout.module.css'
import Header from '../Header/header';
import ChessBuilder from '../../containers/ChessBuilder/ChessBuilder'
export default function Layout() {
    console.log("Inside Layout")
    return (
        <div className={classes.Layout} >
            <Header />
            <content>
                 <ChessBuilder />
            </content>
            
            <footer>Footer</footer>
        </div>
    )
}
