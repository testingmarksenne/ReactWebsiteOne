import React from "react";

export class ButtonOne extends React.Component {
  render() {
    return (
      <div>
        <button>hello</button>
      </div>
    );
  }
}

export class ButtonTwo extends React.Component {
  clickme() {
    alert("OH HELLO THERE");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickme}>Click Me!</button>
      </div>
    );
  }
}

export class TeamButton extends React.Component {}
