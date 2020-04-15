import React from 'react'
import classes from './grid.module.css';

export default function Grid(props) {

    let currRow = Math.floor(props.indexValue/8);
    let checkColor;
    if(currRow% 2=== 0){//if currRow is even then even index are black
        checkColor = {backgroundColor:"#A9A9A9"};  
    }else{
        checkColor = {backgroundColor:"#FFFAFA"};
    }
    
    if(props.isDeadEle)
        checkColor = {backgroundColor:'transparent', border:'0px'} 
    return (
        <div className = {classes.Grid}
            draggable
            onDrag = {props.dragstart}
            onDragOver = {props.dragstop}
            onDrop = {props.dragdrop}
            style = {checkColor }
            dangerouslySetInnerHTML = {{__html:props.gridvalue/*+ props.indexValue*/}} 
         >
         </div>
    )
}
