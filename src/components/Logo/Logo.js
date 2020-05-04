import React from 'react';
import LogoImage from '../../assets/images/logo.png';
import classes from './Logo.module.css';

const Logo = (props) => {
 
  return (
      <div className = {classes.LogoContainer}>
        <img src = { LogoImage } alt="Logo Images"></img>
      </div>
  );
};

export default Logo;