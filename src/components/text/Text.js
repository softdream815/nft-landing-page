const Text = (props) => {
    const divStyle = {
        fontFamily: 'Poppins',
        fontSize: props.size,
        color: 'white',
        display: 'block',
        fontWeight: props.weight,
    };

    return(
        <span style={divStyle}>{props.children}</span>
    )
}

export default Text