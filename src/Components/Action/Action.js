import React, { Component } from "react";

class Action extends Component {
  render() {
    const { numberOfOptions, handleMakeDecision, handleRemoveAll } = this.props;

    return (
      <div>
        <p>{numberOfOptions ? "Here are your options" : "No options"}</p>
        <button disabled={!numberOfOptions} onClick={handleMakeDecision}>
          What should I do?
        </button>
        <button onClick={handleRemoveAll}>Remove all</button>
      </div>
    );
  }
}

export default Action;
