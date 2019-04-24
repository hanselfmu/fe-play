import React, { PureComponent } from 'react';
import { addRender } from '../perf';

class Item extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props !== nextProps || this.state !== nextState;
  // }

  render() {
    addRender();
    const { id, name } = this.props;
    return (
      <div className="item">
        {id}: {name}
      </div>
    );
  }
}

export default Item;
