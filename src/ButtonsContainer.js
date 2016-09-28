import React, { Component } from 'react';
import Button from './Button';

export default class ButtonsContainer extends Component {
  componentDidMount() {

  }

  onButtonClicked(value) {
    this.props.onButtonClicked(value);
  }

  render() {
    return (
      <div className="buttons-container">
        <Button onButtonClicked={this.onButtonClicked.bind(this)} className="top" name="AC" />
        <Button onButtonClicked={this.onButtonClicked.bind(this)} className="top" name="+/-" />
        <Button onButtonClicked={this.onButtonClicked.bind(this)} className="top" name="%" />
        <Button onButtonClicked={this.onButtonClicked.bind(this)} className="action" name="/" />

        <Button onButtonClicked={this.onButtonClicked.bind(this)} name="7" />
        <Button onButtonClicked={this.onButtonClicked.bind(this)} name="8" />
        <Button onButtonClicked={this.onButtonClicked.bind(this)} name="9" />
        <Button onButtonClicked={this.onButtonClicked.bind(this)} className="action" name="X" />

        <Button onButtonClicked={this.onButtonClicked.bind(this)} name="4" />
        <Button onButtonClicked={this.onButtonClicked.bind(this)} name="5" />
        <Button onButtonClicked={this.onButtonClicked.bind(this)} name="6" />
        <Button onButtonClicked={this.onButtonClicked.bind(this)} className="action" name="-" />

        <Button onButtonClicked={this.onButtonClicked.bind(this)} name="1" />
        <Button onButtonClicked={this.onButtonClicked.bind(this)} name="2" />
        <Button onButtonClicked={this.onButtonClicked.bind(this)} name="3" />
        <Button onButtonClicked={this.onButtonClicked.bind(this)} className="action" name="+" />

        <Button onButtonClicked={this.onButtonClicked.bind(this)} name="0" />
        <Button onButtonClicked={this.onButtonClicked.bind(this)} name="." />
        <Button onButtonClicked={this.onButtonClicked.bind(this)} name="" />
        <Button onButtonClicked={this.onButtonClicked.bind(this)} className="action" name="=" />
      </div>
    );
  }
}
