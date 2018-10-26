import React, { Component } from 'react';

import Base from './alternative/Base';
import Circle from './alternative/Circle';

class AppNext extends Component {

  log = (data) => {
    console.log(data);
  }

  render() {
    return (
      <div>
        <Base width={300} height={200} fill='#EEE'>
          <Circle x={50} y={50} r={35} fill='red' />
        </Base>
      </div>
    );
  }
}

export default AppNext;