import React, { Component } from 'react';
import Input from './Input';
import Item from './Item';

class List extends Component {
  revision = 0;
  items = [];
  constructor(props) {
    super(props);
    const arrayMethods = ['map', 'reduce', 'entries', 'every', 'includes', 'forEach', 'slice', 'sort', 'splice', 'keys'];
    for (let i = 0; i < 1000; i++) {
      this.items.push({
        id: i,
        name: arrayMethods[i % arrayMethods.length]
      });
    }
    this.state = {
      items: this.items,
      revision: this.revision,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.revision++;
      this.setState({
        revision: this.revision,
      });
    }, 2000);
  }

  render() {
    const { items, revision } = this.state;
    return (
      <div>
        <Input />
        <div onClick={() => { console.log('clicked'); }}>Click Me</div>
        <div className="List">
          Hello I'm a list: revision {revision}
          {items.map(item => <Item key={item.id} id={item.id} name={item.name} />)}
        </div>
      </div>
    );
  }
}

export default List;
