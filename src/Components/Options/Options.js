import React, { Component } from "react";
import Option from "./components/Option";

class Options extends Component {
  render() {
    const { options } = this.props;

    return (
      <ol>
        {options.map((option, index) => (
          <Option key={index} option={option} />
        ))}
      </ol>
    );
  }
}

export default Options;
