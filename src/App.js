import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Action from "./Components/Action/Action";
import Options from "./Components/Options/Options";
import AddOption from "./Components/AddOption/AddOption";

class App extends Component {
  state = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
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

  handleRemoveAll = () => {
    this.setState(() => {
      return {
        options: [],
      };
    });
  };

  handleRemoveItem = (index) => {
    this.setState((prevState) => {
      const options = [...prevState.options];
      options.splice(index, 1);
      return {
        options,
      };
    });
  };

  render() {
    const { title, subtitle, options, inputText } = this.state;
    const numberOfOptions = options.length;

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          numberOfOptions={numberOfOptions}
          handleMakeDecision={this.handleMakeDecision}
          handleRemoveAll={this.handleRemoveAll}
        />
        {numberOfOptions ? (
          <Options options={options} handleRemoveItem={this.handleRemoveItem} />
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
