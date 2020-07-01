import React from "react";
import Option from "./components/Option";

const Options = ({ options = [], handleDeleteOptions, handleDeleteOption }) => {
  return (
    <div>
      <button className="button button--link" onClick={handleDeleteOptions}>
        Remove all
      </button>
      {!options.length ? (
        <p>Please add an option to get started</p>
      ) : (
        <ol>
          {options.map((option, index) => (
            <Option
              key={index}
              option={option}
              handleDeleteOption={() => handleDeleteOption(index)}
            />
          ))}
        </ol>
      )}
    </div>
  );
};

export default Options;
