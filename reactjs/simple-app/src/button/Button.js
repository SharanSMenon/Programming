import React from "react";
import ReactDOM from "react-dom";
import "./Button.css";
export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    alert("Hello World");
    this.state.clicks++;
    console.log(this.state.clicks);
  }
  render() {
    this.state;
    return <button onClick={this.handleClick}>{this.props.text}</button>;
  }
}
