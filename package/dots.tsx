import './dots.css';
import PropTypes from 'prop-types';
  
const Dots = (props: any) => {
  const speed = 0.9 / (props.speed / 5)
  const delay = 0.07 / (props.speed / 5)

  return (
    <div className='React-Dots'>
        <div style={{animationDelay: "0s", animationDuration: speed.toString()+"s", width: props.size, height: props.size, backgroundColor: props.color}}></div>
        <div style={{animationDelay: 1*delay+"s", animationDuration: speed.toString()+"s", width: props.size, height: props.size, backgroundColor: props.color}}></div>
        <div style={{animationDelay: 2*delay+"s", animationDuration: speed.toString()+"s", width: props.size, height: props.size, backgroundColor: props.color}}></div>
        <div style={{animationDelay: 3*delay+"s", animationDuration: speed.toString()+"s", width: props.size, height: props.size, backgroundColor: props.color}}></div>
        <div style={{animationDelay: 4*delay+"s", animationDuration: speed.toString()+"s", width: props.size, height: props.size, backgroundColor: props.color}}></div>
    </div>
  )
}
  
Dots.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

export default Dots