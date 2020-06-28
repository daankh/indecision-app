import React from "react";
import Option from "./components/Option";

const Options = ({ options, handleDeleteOption }) => {
  return (
    <ol>
      {options.map((option, index) => (
        <Option
          key={index}
          option={option}
          handleDeleteOption={() => handleDeleteOption(index)}
        />
      ))}
    </ol>
  );
};

export default Options;
