import Circle from '../components/graphics/Circle';
import Polygon from '../components/graphics/Polygon';
import Rectangle from '../components/graphics/Rectangle';

class GraphicUtils {

  static drag (type, data, inputs) {
    switch (type) {
      case 'Circle': return Circle.handleDragging(data, inputs);
      case 'Polygon': return Polygon.handleDragging(data, inputs);
      case 'Rectangle': return Rectangle.handleDragging(data, inputs);
      default: 
    }
  }

  static scale (type, data, inputs) {
    switch (type) {
      case 'Circle': return Circle.handleScaling(data, inputs);
      case 'Polygon': return Polygon.handleScaling(data, inputs);
      case 'Rectangle': return Rectangle.handleScaling(data, inputs);
      default: 
    }
  }
}

export default GraphicUtils;
