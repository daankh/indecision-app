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

  onChangeHandler = (e) => {
    const { value } = e.target;
    this.setState({
      inputText: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (!option) {
      return;
    }

    const { options } = this.state;
    options.push(option);

    this.setState({
      options,
      inputText: "",
    });
  };

  onMakeDecision = () => {
    const { options } = this.state;
    const { length } = options;

    const optionIndex = Math.floor(Math.random() * length);
    const selectedOption = options[optionIndex];
    alert(selectedOption);
  };

  onRemoveAll = () => {
    this.setState({
      options: [],
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
          onMakeDecision={this.onMakeDecision}
          onRemoveAll={this.onRemoveAll}
        />
        {numberOfOptions ? <Options options={options} /> : null}
        <AddOption
          onFormSubmit={this.onFormSubmit}
          onChangeHandler={this.onChangeHandler}
          inputText={inputText}
        />
      </div>
    );
  }
}

export default App;
