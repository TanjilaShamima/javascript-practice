const  factoryFunction = (width, height) => {
    return {
        width: width,
        height: height,

        draw: function() {
            console.log('Im a rectangle....')
            this.consoleProperty()
           
        },
        consoleProperty: function () {
            console.log("My height is "+this.height)
            console.log("My weight is "+this.width)
        }


    }
}

let rect1 = factoryFunction(30, 40)
rect1.draw()
let rect2 = factoryFunction(100, 200)
rect2.draw()

