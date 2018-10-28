import React from 'react';

import Circle from '../components/graphics/Circle';
import Rectangle from '../components/graphics/Rectangle';

class Factory {

  static createCircle = () => {
    return { 
      type: 'Circle',
      data: { 
        x: 50, 
        y: 50, 
        r: 30, 
        fill: 'red', 
        isSelected: false,
        isDragging: false 
      }
    };
  }

  static createRectangle = () => {
    return { 
      type: 'Rectangle', 
      data: { 
        x: 50, 
        y: 50, 
        width: 75, 
        height: 75, 
        fill: 'green', 
        isSelected: false,
        isDragging: false 
      }
    };
  }

  static renderGraphic = (g, i, update) => {
    if (g.type === 'Circle')
      return <Circle {...g.data} key={i} index={i} onGraphicUpdate={update} />;
    else if (g.type === 'Rectangle')
      return <Rectangle {...g.data} key={i} index={i} onGraphicUpdate={update} />;
  }
}

export default Factory;
