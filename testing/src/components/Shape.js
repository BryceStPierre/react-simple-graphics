import React, { Component } from 'react';

class Shape extends Component {

  handleDragStart = (e) => {
    let data = Object.assign({}, this.props);
    data.isDragging = true;
    this.props.onUpdate(this.props.index, data);
  }
}

export default Shape;
