import React, { Component } from "react";
import Option from "./components/Option";

class Options extends Component {
  render() {
    const { options, handleRemoveOption } = this.props;

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
  }
}

export default Options;
