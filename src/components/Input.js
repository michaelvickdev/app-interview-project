import React from 'react';
import { Controller } from 'react-hook-form';

function Input({ control, name, label, type, required, step }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const error = fieldState.error?.message

        return (
          <div>
            <label>{label}</label>
            <input {...field} type={type} required={required} step={step} />
            {error && <div className="error">{error}</div>}
          </div>
        );
      }}
    />
  );
}

export default Input;