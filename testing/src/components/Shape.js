import React from 'react';

class Shape extends React.Component {

  mouseDown = (e) => {
    this.props.isSelected(true);
  };
}

export default Shape;