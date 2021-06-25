import { useState } from 'react';

const FormSelection = (props) => {

    const [selectedAction, setSelectedAction] = useState('');

    const selectFormHandler = (e) => {
        setSelectedAction(e.target.value)
    }

    return (
        <>
        <label htmlFor={props.name} className="pb-2">{props.label}</label>
        <div className="input-group">
            <select id={props.name} className="form-select form-select-sm" onChange={selectFormHandler}>
                <option></option>
                {props.options.map(option => {
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>
            <button type="button" className="btn btn-outline-secondary" onClick={() => {props.displayForm(selectedAction)}}>Select Action</button>
        </div>
        </>
    )
}

export default FormSelection;