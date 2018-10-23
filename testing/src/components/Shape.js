import React from 'react';

class Shape extends React.Component {

  mouseDown = (e) => {
    this.props.selectShape(this.props.id);
  };
}

export default Shape;