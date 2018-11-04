import React from 'react';

import { events } from '../../utils/events';

class Graphic extends React.Component {

  handleSelect = (e) => {
    this.props.onEvent(events.SELECT, {
      index: this.props.index,
      isSelected: true
    });
  }

  handleDragStart = (e) => {
    this.props.onEvent(events.DRAG_START, {
      index: this.props.index,
      isSelected: true,
      isDragging: true
    });
  }

  handleScaleStart = (e) => {
    this.props.onEvent(events.SCALE_START, {
      index: this.props.index,
      isScaling: true
    });
  }

  getEvent = (e) => {
    return e.touches && e.touches[0] ? e.touches[0] : e;
  }
}

export default Graphic;
