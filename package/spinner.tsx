import './spinner.css';
import React from 'react';
import PropTypes from 'prop-types';
  
const Spinner = (props) => {
  return <div style={{borderLeftColor: props.color, borderTopColor: props.color, borderRightColor: props.color, borderBottomColor: 'transparent', animation: `spin ${2.5 / props.speed}s infinite linear`, width: props.size, height: props.size}} className='React-Spinner' />
}
  
Spinner.propTypes = {
  color: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired
}

export default Spinner