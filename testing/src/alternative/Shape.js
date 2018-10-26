import React from 'react';

class Shape extends React.Component {

  dragStart = (e) => {
    this.setState({ isMouseDown: true });
  }

  dragging = (e) => {
    if (this.state.isMouseDown) {
      this.setState({
        x: e.clientX,
        y: e.clientY
      });
    }
  }

  dragEnd = (e) => {
    this.setState({ isMouseDown: false });
  }
}

export default Shape;