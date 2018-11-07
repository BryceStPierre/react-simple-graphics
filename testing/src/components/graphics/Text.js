import React from 'react';

import Graphic from './Graphic';

class Text extends Graphic {

  static handleDragging = (data, inputs) => {
    return data;
  }

  static handleScaling = (data, inputs) => {
    return data;
  }

  render() {
    return (
      <g>
        {

        }
        <text
          className='text'
          x={this.props.x}
          y={this.props.y}
          fill={this.props.fill}
        >{this.props.text}</text>
        {

        }
      </g>
    )
  }
}

export default Text;
