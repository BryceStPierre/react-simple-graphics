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

  handleGraphicUpdate = (i, data) => {
    const shapes = this.state.shapes;

    if (i === updateTypes.SCALE_START) {
      shapes[data.index].data.isScaling = true;
      shapes[data.index].data.scalingX = data.x;
      shapes[data.index].data.scalingY = data.y;
    } else if (i === updateTypes.SCALING) {
      shapes.forEach((s, i) => {
        if (s.data.isScaling && (s.data.r + data.x - shapes[i].data.scalingX >= 10)) {
          shapes[i].data.r += data.x - shapes[i].data.scalingX;
        }
      });
    } else if (i === updateTypes.SCALE_END) {
      shapes.forEach((s, i) => {
        shapes[i].data.isScaling = false;
      });
    } else if (i === updateTypes.DRAGGING) {
      shapes.forEach((s, i) => {
        if (s.data.isDragging) {
          shapes[i].data.x = data.x;
          shapes[i].data.y = data.y;
        }
      });
    } else if (i === updateTypes.DRAG_END) {
      shapes.forEach((s, i) => {
        shapes[i].data.isDragging = false;
      });
    } else {
      shapes.forEach((s, i) => {
        s.data.isSelected = false;
      });
      shapes[i].data = data;
    }

    this.setState({ shapes });
  }
}

export default SimpleGraphicsApp;