// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0

// const result = arr.map((value, index) => {
//     return value + 1;
// })

// console.log(result)

// let arr1 = [];

// for(let i = 0; i < arr.length; i++) {
//     arr1.push(arr[i]+1);
// }

// console.log(arr1)

const obj = {
    name: 'Nguyen Van A',
    age: 20,
    address: 'Ha Noi', 
}

Object.keys(obj).map((key) => {
    console.log(obj[key])
})