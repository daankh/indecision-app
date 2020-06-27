import React, { Component } from "react";

class AddOption extends Component {
  render() {
    const { onFormSubmit, onChangeHandler, inputText } = this.props;

    return (
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          name="option"
          value={inputText}
          onChange={onChangeHandler}
        />
        <button>Add option</button>
      </form>
    );
  }
}

export default AddOption;
