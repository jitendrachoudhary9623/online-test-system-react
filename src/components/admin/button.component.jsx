import React, { Component } from "react";

class Button extends Component {
  state = {
    question: this.props.Question
  };

  handleClick = () => {
    console.log(
      "Inside button.component : handleClick fired for removing question"
    );
    this.props.onClick(this.state.question);
  };

  render() {
    return (
      <label>
        <input type="button" className="btn" value="Delete" onClick={this.handleClick} />

        <span></span>
      </label>
    );
  }
}

export default Button;
