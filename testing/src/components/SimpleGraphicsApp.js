import React from 'react';

import { updateTypes } from '../utils/updateTypes';

class SimpleGraphicsApp extends React.Component {
  
  handleBaseUpdate = () => {
    const shapes = this.state.shapes;
    shapes.forEach((s, i) => {
      s.data.isSelected = false;
    });
    this.setState({ shapes });
  }

  fireScaleStart = (i, data) => {
    const shapes = this.state.shapes;
    shapes[data.index].data.isScaling = true;
    shapes[data.index].data.scalingX = data.x;
    shapes[data.index].data.scalingY = data.y;
    this.setState({ shapes });
  }


  fireScaling = (i, data) => {
    const shapes = this.state.shapes;
    shapes.forEach((s, i) => {
      if (s.data.isScaling) {
        if (s.type === 'Circle') {
          var newR = Math.sqrt(Math.pow(s.data.x - data.x, 2) + Math.pow(s.data.y - data.y, 2));
          shapes[i].data.r = Math.sqrt(Math.pow(newR, 2) / 2) - 2;
        } else {
          shapes[i].data.width = data.x - s.data.x;
          shapes[i].data.height = data.y - s.data.y; 
        }
      }
    });
    this.setState({ shapes });
  }

  fireScaleEnd = (i, data) => {
    const shapes = this.state.shapes;
    shapes.forEach((s, i) => {
      shapes[i].data.isScaling = false;
    });
    this.setState({ shapes });
  }

  fireDragging = (i, data) => {
    const shapes = this.state.shapes;
    shapes.forEach((s, i) => {
      if (s.data.isDragging) {
        shapes[i].data.x = data.x;
        shapes[i].data.y = data.y;
      }
    });
    this.setState({ shapes });
  }

  fireDragEnd = (i, data) => {
    const shapes = this.state.shapes;
    shapes.forEach((s, i) => {
      shapes[i].data.isDragging = false;
    });
    this.setState({ shapes });
  }
  
  handleGraphicUpdate = (i, data) => {
    if (i === updateTypes.SCALE_START) 
      this.fireScaleStart(i, data);
    else if (i === updateTypes.SCALING) 
      this.fireScaling(i, data);
    else if (i === updateTypes.SCALE_END) 
      this.fireScaleEnd(i, data);
    else if (i === updateTypes.DRAGGING) 
      this.fireDragging(i, data);
    else if (i === updateTypes.DRAG_END) 
      this.fireDragEnd(i, data);
    else {
      const shapes = this.state.shapes;
      shapes.forEach((s, i) => {
        s.data.isSelected = false;
      });
      shapes[i].data = data;
      this.setState({ shapes });
    }
  }
}

export default SimpleGraphicsApp;