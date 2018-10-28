import React from 'react';

import { updateTypes } from '../../utils/updateTypes';

class Graphic extends React.Component {

  handleSelect = (e) => {
    let data = Object.assign({}, this.props);
    data.isSelected = true;
    this.props.onGraphicUpdate(this.props.index, data);
  }

  handleDragStart = (e) => {
    let data = Object.assign({}, this.props);
    data.isSelected = true;
    data.isDragging = true;
    this.props.onGraphicUpdate(this.props.index, data);
  }

  handleScaleStart = (e) => {
    console.log({
      index: this.props.index,
      x: e.clientX,
      y: e.clientY
    });
    this.props.onGraphicUpdate(updateTypes.SCALE_START, {
      index: this.props.index,
      x: e.clientX,
      y: e.clientY
    });
  }
}

export default Graphic;
