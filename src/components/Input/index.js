import "./Input.css";

const Input = (props) => {
    return (
        <div className="input">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}></input>
        </div>
    )
}

export default Input;
