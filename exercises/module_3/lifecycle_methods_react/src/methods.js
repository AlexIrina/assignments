import React, { Component } from 'react';

class Methods extends Component {
  constructor() {
    super();
    this.state = {};
  }
  // important to lifecycle methods to understand understand
  componentDidMount() {
    // GET the data (from an API) i need to correctly display
  }

  componentDidUpdate() {
    // Called immediately after updating occurs. Not called for the initial render.
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // return true if want it to update
  //   // return false if not
  // }

  // componentWillUnmount() {
  //   // teardown or cleanup your code before your component disappears
  //   // (E.g. remove event listeners)
  // }

  render() {
    return <div>Code goes here</div>;
  }
}

export default Methods;
