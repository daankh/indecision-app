import React from "react";
import Option from "./components/Option";

const Options = ({ options, handleRemoveOption }) => {
  return (
    <ul>
      {options.map((option, index) => (
        <Option
          key={index}
          index={index}
          option={option}
          handleRemoveOption={handleRemoveOption}
        />
      ))}
    </ul>
  );
};

export default Options;
