import React, { Component } from "react";
import Option from "./components/Option";

class Options extends Component {
  render() {
    const { options, onRemoveItem } = this.props;

    return (
      <ol>
        {options.map((option, index) => (
          <Option
            key={index}
            index={index}
            option={option}
            onRemoveItemHandler={onRemoveItem}
          />
        ))}
      </ol>
    );
  }
}

export default Options;
