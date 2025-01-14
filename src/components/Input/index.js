import "./Input.css";

const Input = (props) => {

    const whenTyped = (event) => {
        props.toTheChanged(event.target.value);
    }

    return (
        <div className="input">
            <label>{props.label}</label>
            <input value={props.enteredValue} onChange={whenTyped} required={props.required} placeholder={props.placeholder}></input>
        </div>
    )
}

export default Input;
