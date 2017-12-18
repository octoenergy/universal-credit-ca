import React from 'react';
import './FormFieldStyles.scss';
export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="FormField">
      <label className="FormField__Label" htmlFor={input.name}>{label}</label>
      <input className="FormField__Input" {...input} placeholder={label} type={type} id={input.name}/>
      {touched && ((error && <span className="FormField__Error error">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
);
