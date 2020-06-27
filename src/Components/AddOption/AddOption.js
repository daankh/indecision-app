import React, { Component } from "react";

class AddOption extends Component {
  render() {
    const { handleFormSubmit, handleInputChange, inputText } = this.props;

    return (
      <form onSubmit={handleFormSubmit}>
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
