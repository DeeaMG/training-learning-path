import React, { Component } from "react";

class UpdateRenderedElems extends Component {
  constructor() {
    super();
    this.state = {
      newDate: new Date().toLocaleTimeString(),
    };
  }

  tick() {
    return new Date().toLocaleTimeString();
  }

  // setInterval(, 1000);
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.newDate}.</h2>
      </div>
    );
  }
}

export default UpdateRenderedElems;
