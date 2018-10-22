import React from 'react';

import Circle from './Circle';

class Base extends React.Component {
  constructor (props) {
    super();

    this.state = {
      circle: { x: 50, y: 50, isSelected: false }
    };
  };

  log (content) {
    console.log(content);
  }

  setSelected = (isSelected) => {
    let shape = Object.assign({}, this.state.circle);
    shape.isSelected = isSelected;
    this.setState({ circle: shape });
  }

  mouseMove = (e) => {
    if (this.state.circle.isSelected) {
      let shape = Object.assign({}, this.state.circle);
      shape.x = e.clientX;
      shape.y = e.clientY;
      this.setState({ circle: shape });
    }
  }

  mouseUp = (e) => {
    this.setSelected(false);
  };
  
  render () {
    const { width, height, fill } = this.props;
    const { circle } = this.state;

    return (
      <svg width={width} height={height} onMouseUp={this.mouseUp} onMouseMove={this.mouseMove}>
        <rect width='100%' height='100%' fill={fill} />

        <Circle position={[circle.x, circle.y]} r='40' fill='yellow' isSelected={this.setSelected}/>
      </svg>
    );
  }
}

export default Base;