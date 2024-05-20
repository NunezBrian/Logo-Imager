// index.js
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: input => input.length <= 3 ? true : 'Text must be up to three characters.'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hexadecimal):',
    validate: input => /^#?[0-9A-F]{3,6}$/i.test(input) || /^[a-z]+$/i.test(input) ? true : 'Enter a valid color keyword or hexadecimal number.'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hexadecimal):',
    validate: input => /^#?[0-9A-F]{3,6}$/i.test(input) || /^[a-z]+$/i.test(input) ? true : 'Enter a valid color keyword or hexadecimal number.'
  }
];

inquirer.prompt(questions).then(answers => {
  let shape;
  switch (answers.shape) {
    case 'circle':
      shape = new Circle(answers.shapeColor);
      break;
    case 'triangle':
      shape = new Triangle(answers.shapeColor);
      break;
    case 'square':
      shape = new Square(answers.shapeColor);
      break;
  }

  const svgContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.draw()}
    <text x="150" y="125" font-family="Arial" font-size="40" fill="${answers.textColor}" text-anchor="middle">${answers.text}</text>
  </svg>
  `;

  fs.writeFileSync('./examples/logo.svg', svgContent);
  console.log('Generated logo.svg in the examples directory.');
});
