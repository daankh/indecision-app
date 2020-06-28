import React, { Component } from "react";

class AddOption extends Component {
  state = {
    inputText: "",
  };

  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState(() => {
      return {
        inputText: value,
      };
    });
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
      this.props.handleAddOption(option);
      this.setState({
        inputText: "",
      });
    }
  };

  render() {
    const { inputText } = this.state;
    return (
      <form onSubmit={this.handleAddOption}>
        <input
          type="text"
          name="option"
          value={inputText}
          onChange={this.handleInputChange}
        />
        <button>Add option</button>
      </form>
    );
  }
}

export default AddOption;
