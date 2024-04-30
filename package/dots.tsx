import './dots.css';
import PropTypes from 'prop-types';
  
const Dots = (props: any) => {
  return (
    <div className='React-Dots'>
        <div style={{animationDelay: "0s", width: props.size, height: props.size, backgroundColor: props.color}}></div>
        <div style={{animationDelay: "0.07s", width: props.size, height: props.size, backgroundColor: props.color}}></div>
        <div style={{animationDelay: "0.14s", width: props.size, height: props.size, backgroundColor: props.color}}></div>
        <div style={{animationDelay: "0.21s", width: props.size, height: props.size, backgroundColor: props.color}}></div>
        <div style={{animationDelay: "0.28s", width: props.size, height: props.size, backgroundColor: props.color}}></div>
    </div>
  )
}
  
Dots.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

export default Dots