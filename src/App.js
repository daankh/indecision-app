import React, { Component } from "react";
import "./App.css";

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
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        <p>{numberOfOptions ? "Here are your options" : "No options"}</p>
        <button disabled={!numberOfOptions} onClick={this.onMakeDecision}>
          What should I do?
        </button>
        <button onClick={this.onRemoveAll}>Remove all</button>
        {numberOfOptions ? (
          <ol>
            {options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ol>
        ) : null}
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name="option"
            value={inputText}
            onChange={this.onChangeHandler}
          />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

export default App;
