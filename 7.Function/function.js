const a = [1, 2, 3, 4, 5];
const b = [4, 5, 6, 7, 8];
let c = a.concat(b);
c = [...new Set([...a,...b])]

// console.log(c);


const arr = ["123", "", "123"]
const newData = arr.filter((data) => data.length > 0)

console.log(newData.join('-'))