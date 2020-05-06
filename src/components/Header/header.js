import React, { Component } from 'react'
import classes from './header.module.css';
import MusicToggle from '../MusicToggle/MusicToggle';
import BGSound from '../../assets/audio/BathingTimeBG.mp3';
import Logo from '../Logo/Logo';
import UndoButton from '../UndoButton/UndoButton';
import Timer from '../Timer/Timer'

export default class Header extends Component {
    
    state = {
        isMusic:false,
        audio:new Audio(BGSound),
        dateAndTime:new Date()
    }

    onMusicHandler =()=>{
        this.setState({isMusic:!this.state.isMusic});
    }
    
    render(){
        //console.log(this.state.dateAndTime,"time in Header")
        return (
            <div className={classes.Header}>
                <Logo />
                {/* <Timer currentDate ={this.state.dateAndTime}></Timer> */}
                <p style={{fontSize:"30px", fontWeight:"bold"}}>Welcome to Chess!!</p>
                <div className={classes.Buttons}>  
                    {/* <MusicToggle isMusic = {this.state.isMusic} onMusicToggle={this.onMusicHandler} audio={this.state.audio}>Music</MusicToggle>*/}
                    <UndoButton addListner = {()=>{console.log("undo Clicked")}}>Music</UndoButton> 
                </div>
            </div>
        )
    }
}
