import React from 'react';

import Circle from '../components/graphics/Circle';
import Rectangle from '../components/graphics/Rectangle';

class Factory {

  static createGraphic = (g, i, update) => {
    if (g.type === 'Circle')
      return <Circle {...g.data} key={i} index={i} onUpdate={update} />;
    else if (g.type === 'Rectangle')
      return <Rectangle {...g.data} key={i} index={i} onUpdate={update} />;
  }
}

export default Factory;
