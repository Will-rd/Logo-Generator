const { Triangle, Circle, Square } = require('./shapes.js')


describe('Triangle', () => {
    it('should return a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon height = "100%" width = "100%" points="150, 18 244, 182 56, 182" style="fill:blue;" />');
    });
});
describe('Circle', () => {
    it('should return a red circle', () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual('<circle cx="50" cy="50" r="50"  fill="red;" />')
    });
});
describe('Square', () => {
    it('should return a hexcode colored square', () => {
        const hexShape = new Square();
        hexShape.setColor('ffffff');
        expect(hexShape.render()).toEqual('<rect x="50" y="20" width="150" height="150" style="fill:ffffff;" />')
    })
})


// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');