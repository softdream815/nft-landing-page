const Text = (props) => {
    const divStyle = {
        fontFamily: 'Poppins',
        fontSize: props.size,
        color: props.black ? 'black' : 'white',
        display: props.inline ? 'inline' : 'block',
        fontWeight: props.weight,
        marginBottom: props.margin ? 20 : 0
    };

    return(
        <span style={divStyle}>{props.children}</span>
    )
}

export default Text