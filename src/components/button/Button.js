import './button.css'
// import { Link } from 'react-router-dom'

const Button = (props) => {
    const divStyle = {
        width: props.width,
        height: props.height
    };
    return (
        <button style={divStyle} onClick={props.onClick}>{props.text}</button>
    )
}

export default Button