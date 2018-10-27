import React, { Component } from 'react';

import Base from './alternative/Base';
import Circle from './alternative/Circle';
import Rectangle from './alternative/Rectangle';

class AppNext extends Component {

  dataRequest = (data) => {
    console.log(data);
  }

  render() {
    return (
      <div>
        <Base width={500} height={400} background='#EEE' onDataRequest={this.dataRequest}>
          <Circle x={50} y={50} r={35} fill='red' />
          <Rectangle x={75} y={75} width={50} height={50} fill='green' />
        </Base>
      </div>
    );
  }
}

export default AppNext;