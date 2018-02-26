import React from 'react';

const Textarea = ({value, onChange, property}) => {
  return (
      <div>
        <textarea value={value} onChange={(e) => onChange(e, property)}/>
      </div>
  );
};

export default Textarea;