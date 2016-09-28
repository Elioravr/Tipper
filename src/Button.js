import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <div className={this.props.className + " button"} onClick={this.props.onButtonClicked.bind(this, this.props.name)}>
        {this.props.name}
      </div>
    );
  }
}
