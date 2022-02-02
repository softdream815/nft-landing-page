import './button.css'
// import { Link } from 'react-router-dom'
import '../../assets/fonts/Poppins/Poppins-Light.ttf';

const Button = (props) => {
    const divStyle = {
        width: props.width,
        height: props.height
    };
    return (
        <button style={divStyle}>{props.text}</button>
    )
}

export default Button