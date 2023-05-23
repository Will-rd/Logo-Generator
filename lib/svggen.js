const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require("./shapes.js");

const path = require('path');
const fs = require('fs');

const questions = [
    {
        type: "input",
        name: "text",
        message: "Pick up to three characters for your logo text."
    },
    {
        type: "input",
        name: "textColor",
        message: "What color would you like your logo text to be?"
    },
    {
        type: "input",
        name: "bgColor",
        message: "What color would you like for the background of your logo?"
    },
    {
        type: "list",
        name: "shape",
        message: "Please choose a shape for your logo.",
        choices: ['Square', 'Triangle', 'Circle']
    },
]


let chosenShape;

function generateSvg(data) {
    
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${setShape(chosenShape)}
  
    <text x="150" y="125" font-size="50" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
  
  </svg>`;
}
function setShape(shape) {
  
    return shape.render()
}


function createSvg(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}
function init() { 
    inquirer.prompt(questions).then((inquirerResponses) => {
        switch (inquirerResponses.shape) {
            case 'Circle':
                chosenShape = new Circle();
                
                break;
            case 'Triangle':
                chosenShape = new Triangle();

                break;
            
            case 'Square':
                chosenShape = new Square();
        
            default:
                break;
        }
        chosenShape.setColor(inquirerResponses.bgColor);
        createSvg('logo.svg', generateSvg({...inquirerResponses}))})
 }

 init();


