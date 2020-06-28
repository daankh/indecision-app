import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Action from "./Components/Action/Action";
import Options from "./Components/Options/Options";
import AddOption from "./Components/AddOption/AddOption";

class App extends Component {
  state = {
    options: [],
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

    if (!option) {
      return;
    }

    this.setState((prevState) => {
      const options = [...prevState.options];
      options.push(option.trim());
      return {
        options,
        inputText: "",
      };
    });
  };

  handleMakeDecision = () => {
    const { options } = this.state;
    const { length } = options;

    const optionIndex = Math.floor(Math.random() * length);
    const selectedOption = options[optionIndex];
    alert(selectedOption);
  };

  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: [],
      };
    });
  };

  handleRemoveOption = (index) => {
    this.setState((prevState) => {
      const options = [...prevState.options];
      options.splice(index, 1);
      return {
        options,
      };
    });
  };

  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer";
    const { options, inputText } = this.state;
    const hasOptions = !!options.length;

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={hasOptions}
          handleMakeDecision={this.handleMakeDecision}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        {hasOptions ? (
          <Options
            options={options}
            handleRemoveOption={this.handleRemoveOption}
          />
        ) : null}
        <AddOption
          handleAddOption={this.handleAddOption}
          handleInputChange={this.handleInputChange}
          inputText={inputText}
        />
      </div>
    );
  }
}

export default App;
