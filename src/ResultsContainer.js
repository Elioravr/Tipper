import React, { Component } from 'react';

export default class ResultsContainer extends Component {
  componentWillMount() {
    this.setState({
      fisrtNumber: 0,
      secondNumber: null,
      hasPoint: false,
      action: null
    });
  }

  addNumber(value) {
    let newValue = "";
    if (!this.state.action) {
      newValue += this.state.fisrtNumber;
      if (this.state.hasPoint) {
        newValue += ".";
      }
      newValue += value;

      this.setState({
        hasPoint: false,
        fisrtNumber: parseFloat(newValue, 10)
      });
    }
    else {
      newValue += this.state.secondNumber || 0;
      if (this.state.hasPoint) {
        newValue += ".";
      }
      newValue += value;

      this.setState({
        hasPoint: false,
        secondNumber: parseFloat(newValue, 10)
      });
    }
  }

  getResult() {
    switch(this.state.action) {
      case "+":
        return (this.state.fisrtNumber + this.state.secondNumber);
      case "-":
        return (this.state.fisrtNumber - this.state.secondNumber);
      case "X":
        return (this.state.fisrtNumber * this.state.secondNumber);
      case "/":
        return (this.state.fisrtNumber / this.state.secondNumber);
      default:
        break;
    }
  }

  clearCalculator(result = 0) {
    this.setState({
      hasPoint: false,
      fisrtNumber: result,
      secondNumber: null,
      action: null
    });
  }

  onButtonClicked(value) {
    switch(value) {
      case "AC":
        this.clearCalculator()
        break;
      case "+":
      case "-":
      case "X":
      case "/":
        if (this.state.action) {
          let result = this.getResult();
          this.clearCalculator(result);
        }

        this.setState({ action: value });
        break;
      case ".":
        this.setState({ hasPoint: true });
        break;
      case "=":
        let result = this.getResult();
        this.clearCalculator(result);
        break;
      default:
        this.addNumber(value);
        break;
    }
  }

  render() {
    let result;
    if (this.state.action && this.state.secondNumber) {
      result = this.state.secondNumber;
    }
    else {
      result = this.state.fisrtNumber;
    }

    if (result % 1 !== 0) {
      result = result.toFixed(2)
    }

    return (
      <div className="results-container">
        <div className="tips-container">
          <div className="tip tip-standart">
            <span>standart</span>
            <span>{Math.ceil(result * 1.1)}</span>
          </div>
          <div className="tip tip-nice">
            <span>nice</span>
            <span>{Math.ceil(result * 1.12)}</span>
          </div>
          <div className="tip tip-lovely">
            <span>lovely</span>
            <span>{Math.ceil(result * 1.15)}</span>
          </div>
          <div className="tip tip-perfect">
            <span>perfect</span>
            <span>{Math.ceil(result * 1.2)}</span>
          </div>
        </div>
        <div className="result-container">
          {result}
        </div>
      </div>
    );
  }
}
