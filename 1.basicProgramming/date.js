const date = new Date(); // создаем объект даты
console.log(date); // Sun Jul 21 2019 17:00:00 GMT+0300 (Москва, стандартное время)
console.log(date.getDate()); // 21
console.log(date.getDay()); // 6
console.log(date.getFullYear()); // 2019
console.log(date.getHours()); // 17
console.log(date.toDateString()) // Sun Jul 21 2019
console.log(date.toLocaleDateString()); // 07.07.2019
console.log(date.toLocaleTimeString()); // 17:00:00
console.log(date.toLocaleString()); // 07.07.2019 17:00:00
console.log(date.toTimeString()); // 17:00:00
console.log(date.toUTCString()); // Sun, 21 Jul 2019 17:00:00 GMT
console.log(date.getTime()); // 1564688800000
console.log(date.getTimezoneOffset()); // -180
console.log(date.getUTCDate()); // 21
console.log(date.getUTCDay()); // 6
console.log(date.getUTCFullYear()); // 2019
console.log(date.getUTCHours()); // 17
console.log(date.getUTCMilliseconds()); // 0
console.log(date.getUTCMinutes()); // 0
console.log(date.getUTCMonth()); // 6
console.log(date.getUTCSeconds()); // 0
console.log(date.setDate(10)); // 1564688800000
console.log(date.setFullYear(2020)); // 1564688800000
console.log(date.setHours(10)); // 1564688800000