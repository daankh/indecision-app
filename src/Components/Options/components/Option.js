import React from "react";

const Option = ({ index, option, handleRemoveOption }) => {
  return (
    <li>
      <span>{option}</span>
      <button onClick={() => handleRemoveOption(index)}>Remove</button>
    </li>
  );
};

export default Option;
