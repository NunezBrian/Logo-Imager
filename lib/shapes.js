class Shape {
    constructor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    constructor(color) {
      super(color);
    }
  
    draw() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    constructor(color) {
      super(color);
    }
  
    draw() {
      return `<polygon points="150,20 180,180 120,180" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor(color) {
      super(color);
    }
  
    draw() {
      return `<rect x="70" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  