import React, { Component } from 'react';

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
