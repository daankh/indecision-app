import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Action from "./Components/Action/Action";
import Options from "./Components/Options/Options";
import AddOption from "./Components/AddOption/AddOption";

class App extends Component {
  state = {
    options: this.props.options,
  };

  saveOptionsInLocalStorage = (options) => {
    localStorage.setItem("options", JSON.stringify(options));
  };

  getOptionsFromLocalStorage = () =>
    JSON.parse(localStorage.getItem("options"));

  componentDidMount() {
    const storedOptions = this.getOptionsFromLocalStorage();
    if (storedOptions) {
      this.setState(() => ({ options: storedOptions }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { options } = this.state;
    if (JSON.stringify(options) !== JSON.stringify(prevState.options)) {
      this.saveOptionsInLocalStorage(options);
    }
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState((prevState) => {
      const options = [...prevState.options];
      options.push(option);
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

  handleDeleteOption = (index) => {
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
        <Options
          options={options}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

App.defaultProps = {
  options: [],
};

export default App;
