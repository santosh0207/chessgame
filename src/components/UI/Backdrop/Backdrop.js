import React from 'react';
import classes from './backdrop.module.css'

export const Backdrop = (props) => {
    return (
        <div>
            {
                props.show ? <div className={classes.backdrop} onClick ={props.clicked}> </div> :null
            }
        </div>
    )
}

export default Backdrop;