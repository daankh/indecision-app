import React, { Component } from "react";

class AddOption extends Component {
  state = {
    inputText: "",
    error: undefined,
  };

  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState(() => {
      return {
        inputText: value,
        error: undefined,
      };
    });
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    const error = this.props.handleAddOption(option);
    if (!error) {
      this.setState({
        inputText: "",
        error: undefined,
      });
    } else {
      this.setState({
        error,
      });
    }
  };

  render() {
    const { inputText, error } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input
            type="text"
            name="option"
            value={inputText}
            onChange={this.handleInputChange}
          />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
