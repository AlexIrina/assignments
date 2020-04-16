import React, { Component } from 'react';

class TrueFalseAndNull extends Component {
  constructor() {
    super();
    this.state = {
      unreadMessages: [
        'Call your mom!',
        'New spam email available. All links are definitely safe to click.',
        'react is awesome',
      ],
    };
  }
  // &&
  // true && false
  // with the &&, javascript is determining the truethiness of the thing on the left
  // if the thing on the left is truthy it immediately returns the thing on the right
  // Example:  if true && false then it will return false because thats whats on the right.
  //if false && false then it return false
  render() {
    return (
      <div>
        {
          this.state.unreadMessages.length > 0 && (
            <h2>
              You have {this.state.unreadMessages.length} unread messages!
            </h2>
          )
          //if false then render nothing
        }
      </div>
    );
  }
}

export default TrueFalseAndNull;
