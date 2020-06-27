import React from "react";

const Option = ({ index, option, onRemoveItemHandler }) => {
  return (
    <li>
      <span>{option}</span>
      <button onClick={() => onRemoveItemHandler(index)}>Remove</button>
    </li>
  );
};

export default Option;
