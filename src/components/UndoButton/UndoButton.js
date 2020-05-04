import React from 'react';
import Button from '../UI/Button/Button'
import UndoBtn from '../../assets/images/button_undo.png';

export default function UndoButton(props) {
    
    return <Button src = {UndoBtn} alt ="Undo Button" onClick = {props.addListner}/>

}
