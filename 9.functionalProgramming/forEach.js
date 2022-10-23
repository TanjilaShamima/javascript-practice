const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach(function(item, index, array) {
//   console.log(item, index);
// });

let sum = 0;
let sum1 = 0;

for(let i = 0; i < arr.length; i++) {
  sum+= arr[i];
}

// arr.forEach((item, index, array) => {
//     console.log(item, index);
// })

// arr.forEach((item, index, array) => {})

// arr.forEach((item, index, array) => {})

arr.forEach((item, index, array) => {
    sum1+= item;
})

console.log(sum, sum1);