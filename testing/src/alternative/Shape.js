import React from 'react';

class Shape extends React.Component {

  dragStart = (e) => {
    this.setState({ isMouseDown: true });
  }

  dragging = (e) => {
    if (this.state.isMouseDown) {
      if (e.touches && e.touches[0]) {
        this.draggingUpdate(e.touches[0]);
      } else {
        this.draggingUpdate(e);
      }
    }
  }

  draggingUpdate = (e) => {
    this.setState({
      x: e.clientX + this.positionModification(true),
      y: e.clientY + this.positionModification(false)
    });
  }

  dragEnd = (e) => {
    this.setState({ isMouseDown: false });
  }

  positionModification = (isX) => {
    return 0;
  }
}

export default Shape;