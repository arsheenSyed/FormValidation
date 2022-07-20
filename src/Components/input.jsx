import React, { useState } from "react";
import "./input.css";
const Input = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, errorMessage, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirm Password" && setFocused(true)
        }
        focused={focused.toString()}
        className="form-control"
      />
      <span className="errorMes">{errorMessage}</span>
    </div>
  );
};
export default Input;
