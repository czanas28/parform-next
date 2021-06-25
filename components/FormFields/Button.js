const Button = (props) => {
    return (
        <button
            type={props.type}
            className={props.className}
        >
            {props.label}
        </button>
    )
}

export default Button;