import React from 'react';

import { updateTypes } from '../utils/updateTypes';

class SimpleGraphicsApp extends React.Component {

  handleUpdate = (i, data) => {
    const shapes = this.state.shapes;

    if (i === updateTypes.DRAGGING) {
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
      shapes[i].data = data;
    }

    this.setState({ shapes });
  }
}

export default SimpleGraphicsApp;