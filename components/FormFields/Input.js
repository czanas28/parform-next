import React from 'react';
import { useField } from 'formik';

const TextInput = ({ ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label
          htmlFor={props.id || props.name}
          className={"form-label text-nowrap"}
        >
          {props.label}
        </label>
        <input
          className={"form-control form-control-sm"}
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <div className="text-danger">{meta.error}</div>
        ) : null}
      </>
    );
  };

  export default TextInput;