import React from "react";

const Option = ({ option, handleDeleteOption }) => {
  return (
    <li>
      <span>{option}</span>
      <button onClick={handleDeleteOption}>Remove</button>
    </li>
  );
};

export default Option;
