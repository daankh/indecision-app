import React from "react";

const Option = ({ option, handleDeleteOption }) => {
  return (
    <li>
      <span>{option}</span>
      <button className="button button--link" onClick={handleDeleteOption}>
        Remove
      </button>
    </li>
  );
};

export default Option;
