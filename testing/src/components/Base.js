import React from 'react';

import Circle from './Circle';
import Rectangle from './Rectangle';

class Base extends React.Component {
  constructor (props) {
    super();

    this.state = {
      interactivity: {
        id: null,
        selectFlag: false
      },
      shapes: {
        0: { id: 0, x: 50, y: 50 },
        1: { id: 1, x: 50, y: 50, width: 75, height: 75 }
      }
    }; 
  };

  getShapeById = (id) => {
    return this.state.shapes[id];
  }

  selectShape = (id) => {
    //let shape = Object.assign({}, this.getShapeById(id));

    let interactivity = Object.assign({}, this.state.interactivity);
    interactivity.id = id;
    interactivity.selectFlag = true;
    
    this.setState({ interactivity });
  }

  mouseMove = (e) => {
    if (this.state.interactivity.selectFlag) {
      let shapes = Object.assign({}, this.state.shapes);

      let shape = Object.assign({}, this.getShapeById(this.state.interactivity.id));

      shape.x = e.clientX;
      shape.y = e.clientY;

      shapes[this.state.interactivity.id] = shape;
      this.setState({ shapes });
    }
  }

  mouseUp = (e) => {
    let interactivity = Object.assign({}, this.state.interactivity);
    interactivity.id = null;
    interactivity.selectFlag = false;
    this.setState({ interactivity });
  };
  
  render () {
    const { width, height, fill } = this.props;
    const circle = this.state.shapes[0];
    const rectangle = this.state.shapes[1];

    return (
      <svg width={width} height={height} onMouseUp={this.mouseUp} onMouseMove={this.mouseMove}>
        <rect width='100%' height='100%' fill={fill} />

        <Circle id={circle.id} x={circle.x} y={circle.y} r='40' fill='yellow' selectShape={this.selectShape} />
        <Rectangle id={rectangle.id} x={rectangle.x} y={rectangle.y} width={rectangle.width} height={rectangle.height} fill='blue' selectShape={this.selectShape} />
        {/* <Rectangle x isSelected={this.setSelected} /> */}
      </svg>
    );
  }
}

export default Base;