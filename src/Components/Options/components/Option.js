import React from "react";

const Option = ({ index, option, handleRemoveItem }) => {
  return (
    <li>
      <span>{option}</span>
      <button onClick={() => handleRemoveItem(index)}>Remove</button>
    </li>
  );
};

export default Option;
