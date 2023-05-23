// This class object is made so the other shapes that extend from it can inherit the color chosen by the user.
class Shape {
    constructor() {
        this.bgColor = "";
    }

    setColor(bgColor) {
        this.bgColor = bgColor;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="70"  fill="${this.bgColor}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="75" y="20" width="150" height="150" style="fill:${this.bgColor};" />`;
    }
 }

 class Triangle extends Shape {
    render() {
        return `<polygon height = "100%" width = "100%" points="150, 18 244, 182 56, 182" style="fill:${this.bgColor};" />`;
    }
 }

 
 module.exports = { Circle, Square, Triangle };