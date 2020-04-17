import React from 'react';
import musicButtonOn from '../../assets/music-on.png'
import musicButtonOff from '../../assets/music-off.png'
import classes from './MusicToggle.module.css';

const App = (props) => {
  return (
      <div className = {classes.MusicContainer}>
        <img src = { props.isMusic ? musicButtonOn : musicButtonOff } alt="Music Button"></img>
      </div>
  );
};

export default App;