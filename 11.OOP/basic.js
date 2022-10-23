let rect = {
    areaCalculate: (width, height) => {
        return width * height;
    },
    rangeCalculate: (width, height) => {
        return 2 * (width + height);
    }
}

const rect1 = rect.areaCalculate(2, 3);
const rect2 = rect.rangeCalculate(2, 3);

console.log("rect1", rect1);
console.log("rect2", rect2);