import React from 'react';

import GraphicsContainer from './componentsNext/GraphicsContainer';
import DataUtils from './utils/DataUtils';

class AppNext extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      shapes: []
    };
  }
  
  handleUpdate = (shapes) => {
    this.setState({ shapes });
  } 

  addCircle = () => {
    this.setState({ shapes: this.state.shapes.concat(DataUtils.circle()) });
  }

  addRectangle = () => {
    this.setState({ shapes: this.state.shapes.concat(DataUtils.rectangle()) });
  }

  addPolygon = () => {
    this.setState({ shapes: this.state.shapes.concat(DataUtils.polygon()) });
  }

  render() {
    return (
      <div>
        {/* <Base 
          width={500} 
          height={400} 
          backgroundColor='#EEE' 
          graphics={this.state.shapes} 
          onBaseUpdate={this.handleBaseUpdate}
          onGraphicUpdate={this.handleGraphicUpdate} 
        /> */}
        <GraphicsContainer 
          width={500}
          height={400}
          fill='#EEE'
          graphics={this.state.shapes}
          onUpdate={this.handleUpdate}
        />
        <button onClick={this.addCircle}>Add Circle</button>
        <br />
        <button onClick={this.addRectangle}>Add Rectangle</button>
        <br />
        <button onClick={this.addPolygon}>Add Polygon</button>
        <br />
        <button onClick={() => { console.log(this.state.shapes); }}>Log</button>
      </div>
    );
  }
}

export default AppNext;