import React, { Component } from 'react'
import classes from './header.module.css';
import MusicToggle from '../MusicToggle/MusicToggle'
export default class Header extends Component {
    

    
    render(){
        return (
            <div className={classes.Header}>
                <p>Logo</p>
                <p>this is message</p>
                <div className={classes.Buttons}>  
                    <MusicToggle>Music</MusicToggle>
                    <p>undo on/off</p>
                </div>
            </div>
        )
    }



}
