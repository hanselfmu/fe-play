import React, { Component } from 'react';
import Input from './Input';
import SlowItem from './SlowItem';

class List extends Component {
  revision = 0;
  items = [];
  constructor(props) {
    super(props);
    const arrayMethods = ['map', 'reduce', 'entries', 'every', 'includes', 'forEach', 'slice', 'sort', 'splice', 'keys'];
    for (let i = 0; i < 10; i++) {
      this.items.push({
        id: i,
        name: arrayMethods[i % arrayMethods.length]
      });
    }
    this.state = {
      items: this.items,
      revision: this.revision,
    };

    this.addRevision = this.addRevision.bind(this);
  }

  addRevision() {
    this.revision++;
    this.setState({
      revision: this.revision,
    });
  }

  render() {
    const { items, revision } = this.state;
    return (
      <div>
        <Input updateContainer={this.addRevision} />
        <div onClick={this.addRevision}>Click Me</div>
        <div className="List">
          List Revision <span id="revision">{revision}</span>
          {items.map(item => <SlowItem key={item.id} id={item.id + revision} name={item.name} />)}
        </div>
      </div>
    );
  }

  /*
  componentDidUpdate signals the completion of DOM update in the render phase; it does not mean the browser has painted the updates yet.
  */
  componentDidUpdate() {
    // console.log(document.getElementById('revision').innerHTML);
    // let str = '';
    // for (let i = 0; i < 1e7; i++) {
    //   str += i;
    //   if (str.length > 1000) {
    //     str = '';
    //   }
    // }
  }
}

export default List;
