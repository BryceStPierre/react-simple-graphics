class DataUtils {

  static circle = () => {
    return { 
      type: 'Circle',
      data: { 
        x: 50, 
        y: 50, 
        r: 30, 
        fill: 'red',
        isDragging: false,
        isScaling: false,
        isSelected: false
      }
    };
  }

  static rectangle = () => {
    return { 
      type: 'Rectangle', 
      data: { 
        x: 50, 
        y: 50, 
        width: 75, 
        height: 75, 
        fill: 'green',
        isDragging: false,
        isScaling: false,
        isSelected: false
      }
    };
  }

  static polygon = () => {
    return { 
      type: 'Polygon', 
      data: { 
        points: [
          { x: 110, y: 75 },
          { x: 140, y: 75 },
          { x: 150, y: 100 },
          { x: 140, y: 125 },
          { x: 110, y: 125 },
          { x: 100, y: 100 }
        ],
        fill: 'blue',
        isDragging: false,
        isScaling: false,
        isSelected: false
      }
    };
  }
}

export default DataUtils;