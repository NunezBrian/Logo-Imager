const { Circle, Triangle, Square } = require('../lib/shapes');

describe('Shape classes', () => {
  test('Circle instance draws correctly', () => {
    const circle = new Circle('red');
    expect(circle.draw()).toContain('circle');
    expect(circle.draw()).toContain('fill="red"');
  });

  test('Triangle instance draws correctly', () => {
    const triangle = new Triangle('blue');
    expect(triangle.draw()).toContain('polygon');
    expect(triangle.draw()).toContain('fill="blue"');
  });

  test('Square instance draws correctly', () => {
    const square = new Square('green');
    expect(square.draw()).toContain('rect');
    expect(square.draw()).toContain('fill="green"');
  });
});

