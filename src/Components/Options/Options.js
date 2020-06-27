import React, { Component } from "react";
import Option from "./components/Option";

class Options extends Component {
  render() {
    const { options, handleRemoveItem } = this.props;

    return (
      <ol>
        {options.map((option, index) => (
          <Option
            key={index}
            index={index}
            option={option}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </ol>
    );
  }
}

export default Options;
