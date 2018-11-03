import React from 'react';

import Circle from '../components/graphics/Circle';
import Rectangle from '../components/graphics/Rectangle';
import Polygon from '../components/graphics/Polygon';

class Factory {

  static renderGraphic = (g, i, update) => {
    if (g.type === 'Circle')
      return <Circle {...g.data} key={i} index={i} onGraphicUpdate={update} />;
    else if (g.type === 'Rectangle')
      return <Rectangle {...g.data} key={i} index={i} onGraphicUpdate={update} />;
    else if (g.type === 'Polygon')
      return <Polygon {...g.data} key={i} index={i} onGraphicUpdate={update} />;
  }
}

export default Factory;
