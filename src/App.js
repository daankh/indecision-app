import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Action from "./Components/Action/Action";
import Options from "./Components/Options/Options";
import AddOption from "./Components/AddOption/AddOption";

class App extends Component {
  state = {
    options: this.props.options,
  };

  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState((prevState) => {
      const options = [...prevState.options];
      options.push(option.trim());
      return {
        options,
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
    this.setState(() => ({
      options: [],
    }));
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
    const subtitle = "Put your life in the hands of a computer";
    const { options } = this.state;
    const hasOptions = !!options.length;

    return (
      <div>
        <Header subtitle={subtitle} />
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
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

App.defaultProps = {
  options: [],
};

export default App;
