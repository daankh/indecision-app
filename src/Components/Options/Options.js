import React from "react";
import Option from "./components/Option";

const Options = ({ options, handleRemoveOption }) => {
  return (
    <ol>
      {options.map((option, index) => (
        <Option
          key={index}
          index={index}
          option={option}
          handleRemoveOption={handleRemoveOption}
        />
      ))}
    </ol>
  );
};

export default Options;
