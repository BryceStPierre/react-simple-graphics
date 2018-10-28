import React from 'react';

class SimpleGraphic extends React.Component {

  handleDragStart = (e) => {
    let data = Object.assign({}, this.props);
    data.isDragging = true;
    this.props.onUpdate(this.props.index, data);
  }
}

export default SimpleGraphic;
