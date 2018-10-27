import React, { Component } from 'react';

class Shape extends Component {

  pushUpdate = (data) => {
    this.props.onUpdate(this.props.index, data);
  }

  // Interaction methods.

  handleDragStart = (e) => {
    let data = Object.assign({}, this.props);
    data.isDragging = true;
    this.pushUpdate(data);
  }

  // handleDragging = (e) => {
  //   if (this.props.isDragging) {
  //     if (e.touches && e.touches[0]) {
  //       this.handleDraggingUpdate(e.touches[0]);
  //     } else {
  //       this.handleDraggingUpdate(e);
  //     }
  //   }
  // }

  // handleDraggingUpdate = (e) => {
  //   let data = Object.assign({}, this.props);
  //   data.x = e.clientX + this.handlePositionModification(true);
  //   data.y = e.clientY + this.handlePositionModification(false);
  //   this.pushUpdate(data);
  // }

  // handleDragEnd = (e) => {
  //   let data = Object.assign({}, this.props);
  //   data.isDragging = false;
  //   this.pushUpdate(data);
  // }

  // handlePositionModification = (isX) => {
  //   return 0;
  // }
}

export default Shape;
