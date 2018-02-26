import React from 'react';

const Input = ({value, onChange, type, property}) => {
    return (
        <div>
          <input value={value}
                 onChange={(e) => onChange(e, property)}
                 type={type}/>
        </div>
    )
};

export default Input;