import './dots.css';
import React from 'react';
import PropTypes from 'prop-types';

interface DotsProps {
    color: string;
    size: string;
}
  
const Dots: React.FC<DotsProps> = ({ color, size }) => {
  return (
    <div className='React-Dots'>
        <div style={{animationDelay: "0s", width: size, height: size, backgroundColor: color}}></div>
        <div style={{animationDelay: "0.07s", width: size, height: size, backgroundColor: color}}></div>
        <div style={{animationDelay: "0.14s", width: size, height: size, backgroundColor: color}}></div>
        <div style={{animationDelay: "0.21s", width: size, height: size, backgroundColor: color}}></div>
        <div style={{animationDelay: "0.28s", width: size, height: size, backgroundColor: color}}></div>
    </div>
  )
}
  
Dots.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
}

export default Dots