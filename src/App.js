import React, { useState } from 'react';
import './style.css';

const initialValues = [0, 0];

export default function App() {
  const [values, setValues] = useState(initialValues);

  const handleAddInput = () => {
    setValues([...values, 0]);
  };

  const handleRemoveInput = (index) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);
  };

  const handleChange = (event, index) => {
    const newValues = [...values];
    newValues[index] = +event.target.value;
    setValues(newValues);
  };

  return (
    <div className="container">
      <div className="sum-container">
        <h4 className="sum">
          Sum: {values.reduce((sum, value) => sum + value, 0)}
        </h4>
      </div>
      {values.map((value, index) => (
        <div className="input-group" key={index}>
          <label>Number {index + 1}</label>
          <input
            type="text"
            value={value}
            onChange={(event) => handleChange(event, index)}
          />
          <button onClick={() => handleRemoveInput(index)}>Remove</button>
        </div>
      ))}
      <div className="button-group">
        <button className="add-button" onClick={handleAddInput}>
          Add Input
        </button>
      </div>
    </div>
  );
}

