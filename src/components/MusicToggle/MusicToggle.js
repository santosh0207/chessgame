import React from 'react';
import musicButtonOn from '../../assets/images/music-on.png';
import musicButtonOff from '../../assets/images/music-off.png';
import Button from '../UI/Button/Button'

const App = (props) => {
 
  let MusicButton = null;
  if(props.isMusic){
    props.audio.play();
    MusicButton = musicButtonOn;
  }else{
    props.audio.pause();
    MusicButton = musicButtonOff;
  }



  return <Button src = {MusicButton} alt ="Music Button" onClick = {props.onMusicToggle}/>
  
};

export default App;