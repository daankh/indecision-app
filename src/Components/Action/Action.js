import React, { Component } from "react";

class Action extends Component {
  render() {
    const { hasOptions, handleMakeDecision, handleDeleteOptions } = this.props;

    return (
      <div>
        <p>{hasOptions ? "Here are your options" : "No options"}</p>
        <button disabled={!hasOptions} onClick={handleMakeDecision}>
          What should I do?
        </button>
        <button onClick={handleDeleteOptions}>Remove all</button>
      </div>
    );
  }
}

export default Action;
