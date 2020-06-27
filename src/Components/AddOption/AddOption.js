import React, { Component } from "react";

class AddOption extends Component {
  render() {
    const { handleAddOption, handleInputChange, inputText } = this.props;

    return (
      <form onSubmit={handleAddOption}>
        <input
          type="text"
          name="option"
          value={inputText}
          onChange={handleInputChange}
        />
        <button>Add option</button>
      </form>
    );
  }
}

export default AddOption;
