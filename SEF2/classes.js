//nameless expression
const Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  
  new Rectangle(10,10)
  console.log(Rectangle.name);
  
  //named expression 
  const Rectangle2 = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  
  console.log(Rectangle2.name);
  
  //prototype method
  class Rectangle3 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    calcArea() {
        return this.height * this.width;
      }
    
    get area() {
      return this.calcArea();
    }
  
  }
  
  const square = new Rectangle3(10, 10);
  
  console.log(square.area);
