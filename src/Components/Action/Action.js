import React, { Component } from "react";

class Action extends Component {
  render() {
    const { numberOfOptions, onMakeDecision, onRemoveAll } = this.props;

    return (
      <div>
        <p>{numberOfOptions ? "Here are your options" : "No options"}</p>
        <button disabled={!numberOfOptions} onClick={onMakeDecision}>
          What should I do?
        </button>
        <button onClick={onRemoveAll}>Remove all</button>
      </div>
    );
  }
}

export default Action;
