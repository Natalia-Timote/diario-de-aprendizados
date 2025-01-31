import "./Input.css";

const Input = ({ type = "text", toTheChanged, label, enteredValue, required, placeholder }) => {

    const whenTyped = (event) => {
        toTheChanged(event.target.value);
    }

    return (
        <div className={`input input-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={enteredValue} 
                onChange={whenTyped} 
                required={required} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input;
