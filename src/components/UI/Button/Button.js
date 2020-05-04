import React from 'react';
import classes from './Button.module.css';

const App = (props) => {

  return (
      <div className = {classes.ButtonContainer}>
        <img src = { props.src } alt={props.alt} onClick ={props.onClick}></img>
      </div>
  );
};

export default App;