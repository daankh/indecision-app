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
    this.setState({
      inputText: value,
    });
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (!option) {
      return;
    }

    const { options } = this.state;
    options.push(option.trim());

    this.setState({
      options,
      inputText: "",
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
    this.setState({
      options: [],
    });
  };

  handleRemoveItem = (index) => {
    const { options } = this.state;
    const optionsCopy = [...options];
    optionsCopy.splice(index, 1);
    this.setState({
      options: optionsCopy,
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
