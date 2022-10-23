var Rectangle = function (height, width) {
    this.height = height
    this.width = width

    this.draw = function() {
        console.log("I am a reactangle...")
        this.print()
    }

    this.print = function ()  {
        console.log("Height  " +this.height)
        console.log("Width    " +this.width)
    }
}

var rect3 = new Rectangle(5, 7)
rect3.draw()

// new keyword
