import "./DropdownList.css";

const DropdownList = (props) => {
    return (
        <div className="dropdown-list">
            <label>{props.label}</label>
            <select onChange={event => props.toTheChanged(event.target.value)} value={props.enteredValue}>
                <option defaultValue=""></option>
                {props.themes.map(theme => {
                    return <option key={theme}>{theme}</option>
            })}
            </select>
        </div>
    )
}

export default DropdownList;
