import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      revision: 0,
    };
    this.revision = 0;

    this.updateContainer = props.updateContainer;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.revision++;
    this.setState({
      value: event.target.value,
      revision: this.revision,
    });
    // this.updateContainer();
    setTimeout(this.updateContainer, 0);
  }

  render() {
    const { value, revision } = this.state;
    return (
      <>
        <div>Input Element Revision {revision}</div>
        <input type="text" value={value} onChange={this.handleChange} style={{ width: 500, height: 30, padding: 10, fontSize: 20 }} />
      </>
    )
  };
}

export default Input;
