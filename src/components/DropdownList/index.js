import "./DropdownList.css";

const DropdownList = (props) => {
    return (
        <div className="dropdown-list">
            <label>{props.label}</label>
            <select>{props.options.map(option => {
                return <option key={option}>{option}</option>
            })}
            </select>
        </div>
    )
}

export default DropdownList;
