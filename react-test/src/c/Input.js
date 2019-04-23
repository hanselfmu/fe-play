import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const reactInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

console.log(reactInternals);

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
    console.log(reactInternals.ReactDebugCurrentFrame.getCurrentStack)
  }

  render() {
    const { value } = this.state;
    return (
      <>
        <div>An Input Element</div>
        <input type="text" value={value} onChange={this.handleChange} />
      </>
    )
  };
}

export default Input;
