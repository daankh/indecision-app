import React, { Component } from "react";

class Options extends Component {
  render() {
    const { options } = this.props;

    return (
      <ol>
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ol>
    );
  }
}

export default Options;
