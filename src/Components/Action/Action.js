import React from "react";

const Action = ({ hasOptions, handleMakeDecision, handleDeleteOptions }) => {
  return (
    <div>
      <p>{hasOptions ? "Here are your options" : "No options"}</p>
      <button disabled={!hasOptions} onClick={handleMakeDecision}>
        What should I do?
      </button>
      <button onClick={handleDeleteOptions}>Remove all</button>
    </div>
  );
};

export default Action;
