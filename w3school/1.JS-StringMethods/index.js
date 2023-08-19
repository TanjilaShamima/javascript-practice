// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()

let text = 'i am tanjila shamima.';
let text1 = 'I am a software Engineer';

console.log('Text =>' + text);



// String length
const textLength = text.length;
console.log("textLength: " + textLength);



// String slice(start, end)
const testSlice = text.slice(3, 8);
const testSliceWithoutSecondParameter = text.slice(3);
const testSliceWithNegativeValue = text.slice(-3);
console.log("testSlice: " + testSlice);
console.log("testSliceWithoutSecondParameter: " + testSliceWithoutSecondParameter);
console.log("testSliceWithNegativeValue: " + testSliceWithNegativeValue);



// String substring(start, end)
const testSubstring = text.substring(3, 8);
const testSubstringWithoutSecondParameter = text.substring(5);
const testSubstringWithNegativeValue = text.substring(-5);
console.log("testSubstring: " + testSubstring);
console.log("testSubstringWithoutSecondParameter: " + testSubstringWithoutSecondParameter);
console.log("testSubstringWithNegativeValue: " + testSubstringWithNegativeValue);



// String replace()
const testSubstr = text.substr(3, 8);
const testSubstrOnlyFirst = text.substr(3);
const testSubstrWithNegative= text.substr(-3);
console.log("testSubstr: " + testSubstr);
console.log("testSubstrOnlyFirst: " + testSubstrOnlyFirst);
console.log("testSubstrWithNegative: " + testSubstrWithNegative);



// String replace()
const testReplace = text.replace('i am', 'My name is');
const testReplaceWithoutCaseSensitive = text.replace(/I am/i, 'My name is');
console.log("testReplace: " + testReplace);
console.log("testReplaceWithoutCaseSensitive: " + testReplaceWithoutCaseSensitive);



// // String replaceAll()
// const testReplace = text.replace('i am', 'My name is');
// const testReplaceWithoutCaseSensitive = text.replace(/I am/i, 'My name is');
// console.log("testReplace: " + testReplace);
// console.log("testReplaceWithoutCaseSensitive: " + testReplaceWithoutCaseSensitive);


// String toUpperCase()
// String toLowerCase()
const upperCase = text.toUpperCase();
const lowerCase = upperCase.toLowerCase();
console.log("upperCase: " + upperCase);
console.log("lowerCase: " + lowerCase);


// String concat()
const textConcat = text.concat('...', text1);
console.log("textConcat: " + textConcat);


// String trim()
// String trimStart()
// String trimEnd()

const textTrim = ('       hello     world         ').trim();
const textTrimStart = ('       hello     world         ').trimStart();
const textTrimEnd = ('       hello     world         ').trimEnd();
console.log("textTrim: " + textTrim);
console.log("textTrimStart: " + textTrimStart);
console.log("textTrimEnd: " + textTrimEnd);


// String padStart()
// String padEnd()
let padtext = "5";
let padded = padtext.padStart(4,"0");
let paddedUpdate = padtext.padStart(4,"x");
let paddedEnd = padtext.padEnd(4,"0");
console.log("padtext: " + padded);
console.log("paddedUpdate: " + paddedUpdate);
console.log("paddedEnd: " + paddedEnd);


// String charAt(position)
// String charCodeAt(position)
// String split()



console.log('Text----->' + text);




