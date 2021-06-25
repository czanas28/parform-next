import { useField } from 'formik';

const Select = (props) => {

    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.name} className="pb-2">{props.label}</label>
            <div className="input-group">
                <select id={props.name} className="form-select form-select-sm"{...field} {...props}>
                    {props.options.map(option => {
                        return <option key={option} value={option}>{option}</option>
                    })}
                </select>
                {props.children}
            </div>
            {meta.touched && meta.error ? (
                <div className="text-danger">{meta.error}</div>
            ) : null}
        </>
    )
}

export default Select;