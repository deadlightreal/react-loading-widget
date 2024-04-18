import './index.css';
import React from 'react';
import PropTypes from 'prop-types';

interface SpinnerProps {
    color: string
    speed: number;
    size: string
}
  
const Spinner: React.FC<SpinnerProps> = ({ color, speed, size }) => {
  return <div style={{borderLeftColor: color, borderTopColor: color, borderRightColor: color, borderBottomColor: 'transparent', animation: `spin ${2.5 / speed}s infinite linear`, width: size, height: size}} className='React-Spinner' />
}
  
Spinner.propTypes = {
  color: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired
}

export default Spinner