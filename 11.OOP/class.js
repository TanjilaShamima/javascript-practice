class Rect {
    constructor(height, width){
        this.height = height
        this.width = width
    }

    calculateArea = () => {
        return this.height * this.width
    }

    calculateRange = () => {
        return (2 * (this.height + this.width))
    }
}

const rect1 = new Rect(3, 4)

console.log(rect1.calculateArea())
console.log(rect1.calculateRange())