// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()

let text = "Please locate where 'locate' occurs!";

// String indexOf()
let indexIndexOf = text.indexOf("locate");
let indexWithStart = text.indexOf("locate", 15);

// String lastIndexOf()
let indexLast = text.lastIndexOf("locate");
let indexLastWith = text.lastIndexOf("locate", 15);

// String search()
let indexSearch = text.search("locate");

// String match()
let indexMatch = text.match("locate");
let indexNoMatch = text.match("aa");

// String matchAll()
let indexMatchAll = text.matchAll("locate");
let indexNoMatchAll = text.matchAll("aa");

// String includes()
const textIncludes = text.includes("world");


// String startsWith()
// String endsWith()
const textStartWith = text.includes("world");

console.log('index ==> indexOf ===> ' + indexIndexOf)
console.log('index ==> indexWithStart ===> ' + indexWithStart)
console.log('index ==> indexLast ===> ' + indexLast)
console.log('index ==> indexLastWith ===> ' + indexLastWith)
console.log('index ==> indexSearch ===> ' + indexSearch)
console.log('index ==> indexMatch ===> ' + indexMatch)
console.log('index ==> indexMatchAll ===> ' + indexMatchAll)
console.log('index ==> indexNoMatch ===> ' + indexNoMatch)
console.log('index ==> textIncludes ===> ' + textIncludes)
console.log('index ==> textStartWith ===> ' + textStartWith)