//Pure Function
//A pure function is a function that has no side effects.
//It returns the same result every time it is invoked with the same arguments.


const squareFunction = (x) => {
    return x * x;
}


console.log(squareFunction(2));
console.log(squareFunction(2));
console.log(squareFunction(2));
console.log(squareFunction(2));


//Side Effects

let num = 100;

const changeNumber = () => {
    num = 200;
}


console.log("Before Function Cal ====>",num);
changeNumber();
//because the function has a side effect, it will change the value of num and call the function.
console.log("After Function Call======>", num);





let type = {
    name: 'hikes',
    age: 20
}


const changeType = (type) => {
    type.name = 'hikes1';
    type.age = 21;

    console.log(type);
}

console.log(type);

changeType(type);

console.log(type);




let food = {
    type: 'banana',
}

let food1 = food;

food1.type = 'apple';

console.log(food, food1);