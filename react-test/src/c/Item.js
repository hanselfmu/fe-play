import React, { Component } from 'react';

class Item extends Component {
  render() {
    const { itemID, itemName } = this.props;
    return (
      <div className="List">
        {itemID}: {itemName}
      </div>
    );
  }
}

export default Item;
