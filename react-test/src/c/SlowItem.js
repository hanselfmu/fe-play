import React, { PureComponent } from 'react';
import { addRender } from '../perf';

class SlowItem extends PureComponent {
  render() {
    addRender();
    let str = '';
    for (let i = 0; i < 2e5; i++) {
      str += i;
      if (str.length > 1000) {
        str = '';
      }
    }
    const { id, name } = this.props;
    return (
      <div className="item">
        {id} : {name} : {str}
      </div>
    );
  }
}

export default SlowItem;
