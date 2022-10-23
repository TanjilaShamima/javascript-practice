// let test = 'hikes'
// test[0] = 'l'
// console.log(test)

let array = [1, 2, 3, 4, 5]

for(let i = 0; i < array.length; i++) {
    if(i == 1) {
        let temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
    }
}
