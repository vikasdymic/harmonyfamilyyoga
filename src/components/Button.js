import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button
        className={`button ${
          this.props.buttonStyle ? this.props.buttonStyle : ''
        }`}
      >
        {this.props.buttonLabel}
      </button>
    );
  }
}

export default Button;
