import React from 'react';
import './FormFieldStyles.scss';
export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="FormField">
      <input className="FormField__Input" {...input} placeholder={label} type={type}/>
      {touched && ((error && <span className="FormField__Error error">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
);
