import React, { Component } from 'react';
import ResultsContainer from './ResultsContainer';
import ButtonsContainer from './ButtonsContainer';
import './App.css';

class App extends Component {
  componentWillMount() {
    console.log(this.refs);
  }

  onButtonClicked(value) {
    this.refs.resultsContainer.onButtonClicked(value);
  }

  render() {
    return (
      <div className="App">
        <ResultsContainer ref="resultsContainer" />
        <ButtonsContainer onButtonClicked={this.onButtonClicked.bind(this)} />
      </div>
    );
  }
}

export default App;
