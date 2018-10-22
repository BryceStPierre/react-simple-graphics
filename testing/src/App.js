import React, { Component } from 'react';

import Base from './components/Base';


class App extends Component {

  render() {
    return (
      <Base width={300} height={200} fill='#EEE' log={this.log} />
    );
  }
}

export default App;
