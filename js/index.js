// const nums = [1, 2, 3];
// const strs = ["one", "two", "three"];
// const mapped = nums.map((val, index) => [val, strs[index]]);

// console.log(mapped.flat());

// const value = prompt("Самая крутая черепешка");

// if (value === "Mike") {
//   alert("Verno");
// } else {
//   alert(" Не знаете? Mike");
// }

// let age = prompt("Возраст?", 18);

// let message =
//   age < 3
//     ? "Здравствуй, малыш!"
//     : age < 18
//     ? "Привет!"
//     : age < 100
//     ? "Здравствуйте!"
//     : "Какой необычный возраст!";

// alert(message);
// const a = 25;

// switch (a) {
//   case 25:
//     alert("malovato");
//     break;
//   case 28:
//     alert("Правильно");
//     break;
//   default:
//     alert("No this action");
// }

// let browser = prompt("Введите число?");

// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;

//   default:
//     alert("We hope that this page looks ok!");
// }

// const arr = [
//   {
//     name: "Hohn",
//     age: 25
//   },
//   {
//     name: "Alex",
//     age: 2
//   },
//   {
//     name: "Shon",
//     age: 17
//   },
//   {
//     name: "Sarah",
//     age: 72
//   }
// ];

// const data = arr.find(people => people.name !== "Alex");

// // let users = [
// //   { id: 1, name: "Вася" },
// //   { id: 2, name: "Петя" },
// //   { id: 3, name: "Маша" }
// // ];

// // let user = users.find(item => item.id == 1);

// console.log(data);

// const values = [3, 1, 3, 5, 2, 4, 4, 4];
// const uniqueValues = [...new Set(values)];
// const users = [
//   { id: 11, name: "Adam", age: 23, group: "editor" },
//   { id: 47, name: "John", age: 28, group: "admin" },
//   { id: 85, name: "William", age: 34, group: "editor" },
//   { id: 97, name: "Oliver", age: 28, group: "admin" }
// ];

// // let res = users.filter(it => it.name.includes("Oli"));

// let res = users.filter(it => new RegExp("oli", "i").test(it.name));

// // res is
// [{ id: 97, name: "Oliver", age: 28, group: "admin" }];

// console.log(res);

// const uTable = users.reduce((acc, it) => (acc[it.id] = it, acc), {})

// // uTable equals:
// {
//   11: { id: 11, name: 'Adam', age: 23, group: 'editor' },
//   47: { id: 47, name: 'John', age: 28, group: 'admin' },
//   85: { id: 85, name: 'William', age: 34, group: 'editor' },
//   97: { id: 97, name: 'Oliver', age: 28, group: 'admin' }
// }

// function sumSalaties(sa)
// {
//   "_id":"5078c3a803ff4197dc81fbfb",
//   "email":"user1@gmail.com",
//   "image":"some_image_url",
//   "name":"Name 1"
// },
// {
//   "_id":"5078c3a803ff4197dc81fbfc",
//   "email":"user2@gmail.com",
//   "image":"some_image_url",
//   "name":"Name 2"
// }

// var json = [
//   {
//     _id: "5078c3a803ff4197dc81fbfb",
//     email: "user1@gmail.com",
//     image: "some_image_url",
//     name: "Name 1"
//   },
//   {
//     _id: "5078c3a803ff4197dc81fbfc",
//     email: "user2@gmail.com",
//     image: "some_image_url",
//     name: "Name 2"
//   }
// ];

// json = JSON.stringify(json)
//   .split('"_id":')
//   .join('"id":');

//document.write(json);

// jsonString = jsonString.replace("\"_id\":", "\"id\":");

//регулярное выражение с опцией g. Например:

// var json = [
//   {
//     _id: "1",
//     email: "user1@gmail.com",
//     image: "some_image_url",
//     name: "Name 1"
//   },
//   {
//     _id: "2",
//     email: "user2@gmail.com",
//     image: "some_image_url",
//     name: "Name 2"
//   }
// ];

// str = JSON.stringify(json);

// str = str.replace(/\"_id\":/g, '"id":');

// // json = JSON.parse(str);
// console.log(str);

//С помощью функции карты вы можете сделать это. Пожалуйста, обратитесь ниже код.

// var userDetails = [
//   {
//     _id: "5078c3a803ff4197dc81fbfb",
//     email: "user1@gmail.com",
//     image: "some_image_url",
//     name: "Name 1"
//   }
// ];

// var formattedUserDetails = userDetails.map(
//   ({ _id: id, email, image, name }) => ({
//     id,
//     email,
//     image,
//     name
//   })
// );
//console.log(formattedUserDetails);

// let jsonArr = [
//   {
//     _id: "5078c3a803ff4197dc81fbfb",
//     email: "user1@gmail.com",
//     image: "some_image_url",
//     name: "Name 1"
//   },
//   {
//     _id: "5078c3a803ff4197dc81fbfc",
//     email: "user2@gmail.com",
//     image: "some_image_url",
//     name: "Name 2"
//   }
// ];

// let idModified = jsonArr.map(obj => {
//   return {
//     id: obj._id,
//     email: obj.email,
//     image: obj.image,
//     name: obj.name
//   };
// });
// console.log(idModified);

// var data = {
//   "commits": [{
//     "repository": "example-repo-1",
//     "commit_hash": "example-hash-1"
//   }, {
//     "repository": "example-repo-1",
//     "commit_hash": "example-hash-1.2"
//   }, {
//     "repository": "example-repo-2",
//     "commit_hash": "example-hash-2"
//   }]
// };

// var res = data.commits.reduce(function(obj, v) {
//   // define property if not defined
//   obj[v.repository] = obj[v.repository] || [];
//   // push the object
//   obj[v.repository].push(v);
//   // return the result object
//   return obj;
// }, {})

// console.log(res);

// const employees = {
//   boss: "Michael",
//   secretary: "Pam",
//   sales: "Jim",
//   accountant: "Oscar"
// };

// Object.keys(employees).forEach(key => {
//   let value = employees[key];

//   console.log(`${key}: ${value}`);
// });

// const dogs = [
//   { name: "Abby", rating: 12 },
//   { name: "Bandit", rating: 13 },
//   { name: "Choco", rating: 14 },
//   { name: "Daisy", rating: 12 },
//   { name: "Elmo", rating: 12 },
//   { name: "Falco", rating: 13 },
//   { name: "Ghost", rating: 14 }
// ];

// dogs.sort((a, b) => a.rating - b.rating);

// console.log(dogs);

// var getDaysInMonth = function(month, year) {
//   // Here January is 1 based
//   //Day 0 is the last day in the previous month
//   return new Date(year, month, 0).getDate();
//   // Here January is 0 based
//   // return new Date(year, month+1, 0).getDate();
// };
// console.log(getDaysInMonth(1, 2012));
// console.log(getDaysInMonth(2, 2012));
// console.log(getDaysInMonth(9, 2012));
// console.log(getDaysInMonth(12, 2012));
// var curday = function(sp) {
//   today = new Date();
//   var dd = today.getDate();
//   var mm = today.getMonth() + 1; //As January is 0.
//   var yyyy = today.getFullYear();

//   if (dd < 10) dd = "0" + dd;
//   if (mm < 10) mm = "0" + mm;
//   return mm + sp + dd + sp + yyyy;
// };
// console.log(curday("/"));
// console.log(curday("-"));

// var compare_dates = function(date1, date2) {
//   if (date1 > date2)
//     return "Date1 > Date2";
//   else if (date1 < date2)
//     return "Date2 > Date1";
//   else
//     return "Date1 = Date2";
// };

// console.log(
//   compare_dates(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:00"))
// );
// console.log(
//   compare_dates(new Date("11/14/2013 00:01"), new Date("11/14/2013 00:00"))
// );
// console.log(
//   compare_dates(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:01"))
// );

// var month_name = function(dt) {
//   mlist = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
//   ];
//   return mlist[dt.getMonth()];
// };
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));

// var is_weekend =  function(date1){
//   var dt = new Date(date1);

//   if(dt.getDay() == 6 || dt.getDay() == 0)
//      {
//       return "weekend";
//       }
// }

// console.log(is_weekend('Nov 15, 2014'));
// console.log(is_weekend('Nov 16, 2014'));
// console.log(is_weekend('Nov 17, 2014'));

// var date_diff_indays = function(date1, date2) {
//   dt1 = new Date(date1);
//   dt2 = new Date(date2);
//   return Math.floor(
//     (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
//       Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
//       (1000 * 60 * 60 * 24)
//   );
// };
// console.log(date_diff_indays("04/02/2014", "11/04/2014"));
// console.log(date_diff_indays("12/02/2014", "11/04/2014"));

// var yesterday = function(date1) {
//   var dt = new Date(date1);
//   return (dt.getDate() - 1).toString();
// };
// console.log(yesterday("Nov 15, 2014"));
// console.log(yesterday("Nov 16, 2015"));
// console.log(yesterday("Nov 17, 2016"));

// function max_date(all_dates) {
//   var max_dt = all_dates[0],
//     max_dtObj = new Date(all_dates[0]);
//   all_dates.forEach(function(dt, index) {
//     if (new Date(dt) > max_dtObj) {
//       max_dt = dt;
//       max_dtObj = new Date(dt);
//     }
//   });
//   debugger;
//   return max_dt;
// }
// console.log(max_date(["2015/02/01", "2015/02/02", "2015/01/03"]));

// function min_date(all_dates) {
//   var min_dt = all_dates[0],
//     min_dtObj = new Date(all_dates[0]);
//   all_dates.forEach(function(dt, index) {
//     if (new Date(dt) < min_dtObj) {
//       min_dt = dt;
//       min_dtObj = new Date(dt);
//     }
//   });
//   debugger;
//   return min_dt;
// }
// console.log(min_date(["2015/02/01", "2015/02/02", "2015/01/03"]));

// function timeConvert(n) {
//   var num = n;
//   var hours = num / 60;
//   var rhours = Math.floor(hours);
//   var minutes = (hours - rhours) * 60;
//   var rminutes = Math.round(minutes);
//   return (
//     num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s)."
//   );
// }

// console.log(timeConvert(200));

// var is_array = function(input) {
//   if (toString.call(input) === "[object Array]") return true;
//   return false;
// };
// console.log(is_array("w3resource"));
// console.log(is_array([1, 2, 4, 0]));

// var first = function(array, n) {
//   if (array == null) return void 0;
//   if (n == null) return array[0];
//   if (n < 0) return [];
//   return array.slice(0, n);
// };

// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));

// const num = window.prompt();
// const str = num.toString();
// const result = [str[0]];

// for (let x = 1; x < str.length; x++) {
//   if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
//     result.push("-", str[x]);
//   } else {
//     result.push(str[x]);
//   }
// }
// console.log(result.join(""));

// var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// var mf = 1;
// var m = 0;
// var item;
// for (var i = 0; i < arr1.length; i++) {
//   for (var j = i; j < arr1.length; j++) {
//     if (arr1[i] == arr1[j]) m++;
//     if (mf < m) {
//       mf = m;
//       item = arr1[i];
//     }
//   }
//   m = 0;
// }
// console.log(item + " ( " + mf + " times ) ");

// var a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
//   [3, 10, 26, 7]
// ];

// for (var i in a) {
//   console.log("row " + i);
//   for (var j in a[i]) {
//     console.log(" " + a[i][j]);
//   }
// }

// var array = [1, 2, 3, 4, 5, 6],
//   s = 0,
//   p = 1,
//   i;
// for (i = 0; i < array.length; i += 1) {
//   s += array[i];
//   p *= array[i];
// }
// console.log("Sum : " + s + " Product :  " + p);

// function _keys(obj) {
//   if (!isObject(obj)) return [];
//   if (Object.keys) return Object.keys(obj);
//   var keys = [];
//   for (var key in obj) if (_.has(obj, key)) keys.push(key);
//   return keys;
// }
// function isObject(obj) {
//   var type = typeof obj;
//   return type === "function" || (type === "object" && !!obj);
// }
// console.log(_keys({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));

// Object.objsize = function(Myobj) {
//   var osize = 0,
//     key;
//   for (key in Myobj) {
//     if (Myobj.hasOwnProperty(key)) osize++;
//   }
//   return osize;
// };

// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12
// };

// var objsize = Object.objsize(student);
// console.log("Size of the current object : " + objsize);

// function is_creditCard(str) {
//   regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

//   if (regexp.test(str)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(is_creditCard("378282246310006"));

// console.log(is_creditCard("37828224630006"));
// {
//   "members": [
//     {
//       "name": "Molecule Man",
//       "age": 29,
//       "secretIdentity": "Dan Jukes",
//     }
//   ]
// }

// const data = {
//   items: [
//     {
//       items: [
//         {
//           id: 1,
//           name: "Bill Gates",
//           age: 43
//         },
//         {
//           id: 2,
//           name: "Sergey Brin",
//           age: 33
//         }
//       ],
//       items2: [
//         {
//           id: 3,
//           name: "Larry Page",
//           age: 34
//         },
//         {
//           id: 4,
//           name: "dsfsdfs",
//           age: 34
//         }
//       ]
//     }
//   ]
// };

// function find_duplicate_in_array(arra1) {
//   var object = {};
//   var result = [];

//   arra1.forEach(function(item) {
//     if (!object[item]) object[item] = 0;
//     object[item] += 1;
//     debugger;
//   });

//   for (var prop in object) {
//     if (object[prop] >= 2) {
//       result.push(prop);
//       debugger;
//     }
//   }

//   return result;
// }

// console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));

// let gtu = [
//   { enrollnumber: 18, name: "Shree" },
//   { enrollnumber: 21, name: "Krunal" },
//   { enrollnumber: 22, name: "Rushikesh" }
// ];

// let mappedArrayObj = gtu.map(obj => {
//   let newObj = {};
//   newObj[obj.enrollnumber] = obj.name;
//   return newObj;
// });

// console.log(mappedArrayObj);
// // let no = [1, 3, 4, 5];

// // no.map((item, i) => console.log(i))

// let no = [1, 3, 4, 5];

// const square = x => {
//   return x * x;
// };

// let newArray = no.map((item, i) => square(item));

// console.log(newArray);

// let strangerThings = [
//   {
//     name: "Dustin",
//     age: 13
//   },
//   {
//     name: "Mike",
//     age: 12
//   },
//   {
//     name: "Eleven",
//     age: 11
//   }
// ];

// let characters = [];

// for (let i = 0; i < strangerThings.length; i++) {
//   characters.push(strangerThings[i].name);
// }
// console.log(characters);
// const date = new Date();
// console.log(new Date(date.valueOf() + 1000 * 60 * 60 * 24));

// let d = new Date();

// new Date(d.setDate(d.getDate() + 1));
// console.log(d);

// const myArray = [1, 2, 3];
// // using the third argument to map
// myArray.map((value, index, array) => {
//   return array[index] + 1;
// });
// // using the variable that holds the original array
// let data = myArray.map((value, index) => {
//   return myArray[index] * 2;
// });
// // just using map without accessing the array manually
// myArray.map(value => {
//   return value + 1;
// });

// console.log(data);

// const myArray = [1, 2, 3, 4];
// myArray.map(number => {
//   console.log(number);
// });
// // nothing changes except the method we used
// myArray.forEach(number => {
//   console.log(number);
// });

// const originalArray = [1, 2, 3, 4];
// const newArray = [];
// originalArray.forEach((number, i) => {
//   newArray[i] = number * 2;
// });
// console.log(newArray); // [2, 4, 6, 8]

// const originalArray = [1, 2, undefined, 3];
// const newArray = originalArray
//   .filter(value => {
//     return Number.isInteger(value);
//   })
//   .map(value => {
//     return value * 2;
//   });
// console.log(newArray); // [2, 4, 6]

// const myUsers = [
//   { name: "chuloo", likes: "grilled chicken" },
//   { name: "chris", likes: "cold beer" },
//   { name: "sam", likes: "fish biscuits" }
// ];
// // const usersByFood = myUsers.map(item => {
// //     const container = {};
// //     container[item.name] = item.likes;
// //     container.age = item.name.length * 10;
// //     return container;
// // })
// // console.log(usersByFood);
// // [{chuloo: "grilled chicken", age: 60}, {chris: "cold beer", age: 50}, {sam: "fish biscuits", age: 30}]
// const user = myUsers.map(items => {
//   const container = {};
//   (container[items.name] = items.likes),
//     (container.age = items.name.length * 10);
//   return container;
// });\

// const girls = [
//   { name: "Sarah", age: 19 },
//   { name: "Laura", age: 10 },
//   { name: "Jessy", age: 29 },
//   { name: "Amy", age: 23 }
// ];

// const data = girls.map(girl => girl.age);

// console.log(data);

// const numbers = [4, 9, 36, 49];

// let oddSquareRoots = numbers.map(num => {
//   if (num % 2 != 0) {
//     return Math.sqrt(num);
//   }
//   return num;
// });

// console.log(oddSquareRoots);

// const numbers = [4, 9, 36, 49];

// let oddSquareRoots = numbers.map(num => {
//   return num % 2 !== 0 ? Math.sqrt(num) : num;
// });

// console.log(oddSquareRoots);

// const originalArray = [1, 2, 3, 4];
// const newArray = [];

// originalArray.forEach((number, i) => {
//   newArray[i] = number * 2;
// });

// console.log(newArray);

// const favoriteFood = ["Pizza", "Files", "Sedish-meatballs"];

// console.log(...favoriteFood);

// const data = [
//   { name: "stark", time: "dinner" },
//   { name: "boolish", time: "brekfast" }
// ];

// console.log(data);

// let oldCar = {
//   make: "Toyota",
//   model: "Tercel",
//   year: "1996"
// };

// for (let key in oldCar) {
//   console.log(`${key} --> ${oldCar[key]}`);
// }

// let str = "Turn the page";

// for (let index in str) {
//   console.log(`Index of ${str[index]}: ${index}`);
// }

// main() {
//   var list = [1,2,3];
//   print( list.length ); // 3
// }
// const tooldart = ["Hammer", "Screwdriver", "Ruler"];

// for (item of tooldart) console.log(item);

// const age = [16, 14, 18];

// let pers = age.some(person => person == 18);

// console.log("pers", pers);

// const prices = [25, 30, 15, 155, 40, 10];

// const price = prices.reduce((did, last) => did + last);
// console.log("price", price);

// var fruits = ["Яблоко", "Банан"];

// var newLength = fruits.push("Апельсин");

// const find = fruits.indexOf("Банан");

// const deleteItem = fruits.slice(2);

// console.log(fruits);

// const data = [
//   {
//     name: "Derek",
//     id: 1
//   },
//   {
//     name: "Lates",
//     id: 2
//   }
// ];
// const datas = [
//   {
//     name: "Simson",
//     id: 11
//   },
//   {
//     name: "Shilov",
//     id: 12
//   }
// ];

// let derek = data.concat(datas);
// console.log(derek);

// const data = [
//   {
//     name: "Derek",
//     id: 1,
//     items: [
//       {
//         start: "gour",
//         id: 100
//       },
//       {
//         start: "buor",
//         id: 200
//       }
//     ]
//   }
// ];
// const datas = [
//   {
//     name: "Simson",
//     id: 11,
//     items: [
//       {
//         start: "ttsa",
//         id: 600
//       },
//       {
//         start: "buasdasor",
//         id: 5
//       }
//     ]
//   }
// ];

// const getArray1 = data.items;
// const getArray2 = datas.items;

// // let derek = getArray1.concat(getArray2);
// console.log(getArray1);

// const result = [...data, ...datas].reduce((acc, cur) => {
//   acc = [...acc, ...cur.items];
//   return acc;
// }, []);

// const filter = result.sort((a, b) => a.id - b.id);

// console.log(filter);

// const data = {
//   name: "Derek",
//   id: 1,
//   items: [
//     {
//       start: "gour",
//       id: 100
//     },
//     {
//       start: "buor",
//       id: 200
//     }
//   ]
// };

// const datas = {
//   name: "Simson",
//   id: 11,
//   items: [
//     {
//       start: "ttsa",
//       id: 600
//     },
//     {
//       start: "buasdasor",
//       id: 5
//     }
//   ]
// };

// const result = [...data.items, ...datas.items].sort((a, b) => a.id - b.id);

// console.log(result);

// const res = result.find(find => find.id !== 100);

// console.log(res);

// const res = resul;
// const filter = result.sort((a, b) => a.id - b.id);

// let users = [
//   {
//     id: 1,
//     name: "Denis",
//     age: 28
//   },
//   {
//     id: 2,
//     name: "Olga",
//     age: 25
//   },
//   {
//     id: 3,
//     name: "Ivan",
//     age: 18
//   }
// ];

// const filter = users.sort((a, b) => a.id - b.id);
// const sort = users.sort((prev, next) => (prev.name < next.name ? -1 : 1));

// console.log(sort);

// const arrayOfObj = [
//   { key1: "value1", key2: "value2" },
//   { key1: "value1", key2: "value2" }
// ];
// const newArrayOfObj = arrayOfObj.map(({ key1: stroke, ...rest }) => ({
//   stroke,
//   ...rest
// }));

// console.log(newArrayOfObj);

// obj = {a:1, b:2, c:3}

// {a, ...obj2} = obj

// a // 5

// obj2 // {b:2, c:3}

// let users = [
//   {
//     id: 1,
//     name: "Denis",
//     age: 28
//   },
//   {
//     id: 2,
//     name: "Olga",
//     age: 25
//   },
//   {
//     id: 3,
//     name: "Ivan",
//     age: 18
//   }
// ];

// const quart = users.reduce((total, price, index, array) => {
//   total += price.age;
//   if (index === array.length - 1) {
//     return total / array.length;
//   } else {
//     return total;
//   }
// }, 0);

// console.log(quart);

// var friends = [
//   { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//   { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//   { name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
// ];

// // allbooks - список, который будет содержать все книги друзей +
// // дополнительный список указанный в initialValue
// var allbooks = friends.reduce((prev, curr) => {
//   return [...prev, ...curr.books];
// }, []);

// console.log(allbooks);

// var friends = [
//   { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//   { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//   { name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
// ];

// const average = friends.reduce((total, amount, index, array) => {
//   return (total += amount.age) / 3;
// }, 0);

// console.log(friends.length);

// console.log(average);

// const fruitBasket = [
//   "banana",
//   "cherry",
//   "orange",
//   "apple",
//   "cherry",
//   "orange",
//   "apple",
//   "banana",
//   "cherry",
//   "orange",
//   "fig"
// ];

// const count = fruitBasket.reduce((tally, fruit) => {
//   if (!tally[fruit]) {
//     tally[fruit] = 1;
//   } else {
//     tally[fruit] = tally[fruit] + 1;
//   }
//   return tally;
// }, {});

// console.log(count);

// const data = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// const flat = data.reduce((total, amount) => {
//   return total.concat(amount);
// }, []);

// console.log(flat); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// const data = [
//   { a: "happy", b: "robin", c: ["blue", "green"] },
//   { a: "tired", b: "panther", c: ["green", "black", "orange", "blue"] },
//   { a: "sad", b: "goldfish", c: ["green", "red"] }
// ];

// const uniqueColors = data.reduce((total, amount) => {
//   amount.c.forEach(color => {
//     if (total.indexOf(color) === -1) {
//       total.push(color);
//     }
//   });
//   return total;
// }, []);

// console.log(uniqueColors);

// var jediMasters = ["Leia", "Anakin", "Luke", "Obi Wan Kenobi"];
// var jediMastersSayHi = jediMasters.map(function(jediName, jediIndex) {
//   if (jediName === "Obi Wan Kenobi") {
//     return (
//       "And last but not less important, I'm #" +
//       (jediIndex + 1) +
//       " " +
//       jediName
//     );
//   } else {
//     return "My name is " + jediName + ", I'm #" + (jediIndex + 1);
//   }
// });
// console.log(jediMastersSayHi);

// users = [
//   {
//     name: "Bruce Wayne",
//     location: "Gotham City",
//     heroName: "Batman"
//   },
//   {
//     name: "Barry Allen",
//     location: "Central City",
//     heroName: "The Flash"
//   },
//   {
//     name: "Clark Kent",
//     location: "Kryptonopolis",
//     heroName: "Superman"
//   }
// ];

// userInfo = users.map(u => ({
//   name: u.name,
//   heroName: u.heroName
// }));

// console.log(userInfo);

// const data = [
//   {
//     name: "Other",
//     id: 1,
//     items: [
//       {
//         name: "Start",
//         id: 1,
//         card: [
//           {
//             id: 1,
//             prod: "Zava"
//           }
//         ]
//       },
//       {
//         name: "Pupsi",
//         id: 2
//       }
//     ]
//   },
//   {
//     name: "ca/CaLg",
//     id: 2
//   },
//   {
//     name: "ag/Ag",
//     id: 3
//   },
//   {
//     name: "cu/cuso4",
//     id: 4
//   }
// ];

// const dats = data.map(el => {
//   return el.name
//     .split("/")
//     .map(titlePart => titlePart.replace("other")
// });

// titlePart[0].toLowerCase() + titlePart.slice(1));
// // const replace = dats.filter(name => {
// //  const  data = name === "AG"
// //  return data.replace("G", "j"))
// console.log("dats", dats);
// }
// const replaced = dats.filter(date => date.replace("Other", "j"));
// console.log("repreplacedace", replaced);

// datas = data.reduce((total, prod, index, array) => {
//   const data = prod.name.split("/");

//   const arr = data.charAt(1).toLowerCase();

//   console.log("data", arr);

//   if (data.name === "cuso4") {
//     console.log("data", data.name);
//     data.name = "CuSO4";
//   }

//   total = data;
//   console.log("total", total);
//   total.push({
//     id: prod.id,
//     name: prod.name
//   });
//   total.sort((a, b) => b.id - a.id);

//   return total;
// }, []);

// const data = [
//   {
//     name: "Other",
//     id: 1,
//     items: [
//       {
//         name: "Start",
//         id: 1,
//         card: [
//           {
//             id: 1,
//             prod: "Zava"
//           }
//         ]
//       },
//       {
//         name: "Pupsi",
//         id: 2
//       }
//     ]
//   },
//   {
//     name: "ca/CaLg",
//     id: 2
//   },
//   {
//     name: "ag/Ag",
//     id: 3
//   },
//   {
//     name: "cu/cuso4",
//     id: 4
//   }
// ];

// const red = data.map((price, index) => ({

//   console.log()

// }))

// console.log("val", data);

// var tasks = [
//   {
//     name: "Write for Envato Tuts+",

//     duration: 120
//   },

//   {
//     name: "Work out",

//     duration: 60
//   },

//   {
//     name: "Procrastinate on Duolingo",

//     duration: 240
//   }
// ];

// var task_names = [];

// tasks.forEach(function(task) {
//   task_names.push({
//     names: task.name,
//     cleare: task.duration
//   });
// });

// console.log(Object.keys(tasks[0]));
// console.log(task_names);

// var total = [1, 2, 3, 4, 5].reduce(function(previous, current, index) {
//   var val = previous + current;
//   console.log(
//     "The previous value is " +
//       previous +
//       "; the current value is " +
//       current +
//       ", and the current iteration is " +
//       (index + 1)
//   );
//   return val;
// }, 0);

// console.log("The loop is done, and the final value is " + total + ".");

// var monday = [
//   {
//     name: "Write a tutorial",
//     duration: 180
//   },
//   {
//     name: "Some web development",
//     duration: 120
//   }
// ];

// var tuesday = [
//   {
//     name: "Keep writing that tutorial",
//     duration: 240
//   },
//   {
//     name: "Some more web development",
//     duration: 180
//   },
//   {
//     name: "A whole lot of nothing",
//     duration: 240
//   }
// ];

// var tasks = [monday, tuesday];

// var result = tasks
//   .reduce(function(accumulator, current) {
//     return accumulator.concat(current);
//   })
//   .map(function(task) {
//     return task.duration / 60;
//   })
//   .filter(function(duration) {
//     return duration >= 2;
//   })
//   .map(function(duration) {
//     return duration * 25;
//   })
//   .reduce(function(accumulator, current) {
//     return [+accumulator + +current];
//   })
//   .map(function(dollar_amount) {
//     return "$" + dollar_amount.toFixed(2);
//   })
//   .reduce(function(formatted_dollar_amount) {
//     return formatted_dollar_amount;
//   });

// console.log(result);

// let data = [
//   {
//     country: "China",
//     pop: 1409517397
//   },
//   {
//     country: "India",
//     pop: 1339180127
//   },
//   {
//     country: "USA",
//     pop: 324459463
//   },
//   {
//     country: "Indonesia",
//     pop: 263991379
//   }
// ];

// let sum = data.reduce((acc, val) => {
//   return val.country == "China" ? acc : acc + val.pop;
// }, 0);

// console.log(sum);

// const fruitBasket = [
//   "banana",
//   "cherry",
//   "orange",
//   "apple",
//   "cherry",
//   "orange",
//   "apple",
//   "banana",
//   "cherry",
//   "orange",
//   "fig"
// ];

// const count = fruitBasket.reduce((tally, fruit) => {
//   if (!tally[fruit]) {
//     tally[fruit] = 1;
//   } else {
//     tally[fruit] = tally[fruit] + 1;
//   }
//   return Object.values(tally);
// }, {});

// console.log(count);

// const data = [
//   { a: "happy", b: "robin", c: ["blue", "green"] },
//   { a: "tired", b: "panther", c: ["green", "black", "orange", "blue"] },
//   { a: "sad", b: "goldfish", c: ["green", "red"] }
// ];

// const colors = data.reduce((total, amount) => {
//   amount.c.forEach(color => {
//     total.push(color);
//   });
//   return total;
// }, []);

// console.log(colors);
// const users = [
//   { id: 11, name: "Adam", age: 23, group: "editor" },
//   { id: 47, name: "John", age: 28, group: "admin" },
//   { id: 85, name: "William", age: 34, group: "editor" },
//   { id: 97, name: "Oliver", age: 28, group: "admin" }
// ];

// let res = users.filter(it => new RegExp("oli", "i").test(it.name));

// console.log(res);

// var square = [1, 2, 3, 4, 5].map(function(value) {
//   return Math.pow(value, 2);
// });

// console.log(square);
// let user = {
//   name: "John"
// };

// let id = Symbol("id");

// user[id] = 1;

// console.log(user);

// var a = 42;

// var b = (a > 41) ? "hello" : "world";

// console.log(b)

// var a = [];

// a[0] = 1;
// a[1] = 2;
// a[2] = 3;

// let b = a.reduce(item, price, index => item + price[index]);
// console.log(b);

// function foo() {
//   var arr = Array.prototype.slice.call(arguments);
//   arr.push("bam");
//   console.log(arr);
// }

// foo("bar", "baz");

// c

// const dad = {
//   id: 1,
//   name: John
// };

// const data = Array.from(dad);

// console.log(data);

// let handlers = Symbol("handlers");

// function makeObservable(target) {
//   // 1. Создадим хранилище обработчиков
//   target[handlers] = [];

//   // положим туда функции-обработчики для вызовов в будущем
//   target.observe = function(handler) {
//     this[handlers].push(handler);
//   };

//   // 2. Создадим прокси для реакции на изменения
//   return new Proxy(target, {
//     set(target, property, value, receiver) {
//       let success = Reflect.set(...arguments); // перенаправим операцию к оригинальному объекту
//       if (success) {
//         // если не произошло ошибки при записи свойства
//         // вызовем обработчики
//         target[handlers].forEach(handler => handler(property, value));
//       }
//       return success;
//     }
//   });
// }

// let user = {};

// user = makeObservable(user);

// user.observe((key, value) => {
//   alert(`SET ${key}=${value}`);
// });

// user.name = "John";

// let array = [1, 2, 3];

// array = new Proxy(array, {
//   get(target, prop, receiver) {
//     if (prop < 0) {
//       // даже если обращение к элементу идёт как arr[1]
//       // prop является строкой, нужно преобразовать её к числу
//       prop = +prop + target.length;
//     }
//     return Reflect.get(target, prop, receiver);
//   }
// });

// alert(array[-1]); // 3
// alert(array[-2]); // 2

// <section id="app">
//   <div id="main" class="box">
//     <h1 class="title">Create new question</h1>

//     <hr />

//     <div class="field">
//       <label class="label">Name</label>
//       <div class="control">
//         <input class="input" type="text" placeholder="e.g. Advanced Mathematics I" v-model="name">
//       </div>
//     </div>

//     <div class="field">
//       <label class="label">Topic</label>
//       <div class="control">
//         <div class="select">
//           <select v-model="topic">
//             <option v-for="topic in topicList">{{ topic }}</option>
//           </select>
//         </div>
//       </div>
//     </div>

//     <div class="field">
//       <label class="label">Question body</label>
//       <div class="control">
//         <quill-editor v-model="questionBody"
//                       ref="myQuillEditor"
//                       :options="editorOption"
//                       @blur="onEditorBlur($event)"
//                       @focus="onEditorFocus($event)"
//                       @ready="onEditorReady($event)">
//           </quill-editor>
//       </div>
//     </div>

//     <div class="field">
//       <label class="label">Answers</label>
//       <div class="field has-addons" v-for="(answer, index) in answers">
//         <div class="control">
//           <a class="button is-static is-fixed-width">{{ String.fromCharCode(65 + index) }}</a>
//         </div>

//         <div class="control is-expanded">
//           <input class="input" type="text" placeholder="Enter answer" v-model="answers[index]">
//         </div>

//         <div class="control">
//           <a class="button is-danger" v-on:click="removeAnswer(index)"><strong>-</strong></a>
//         </div>
//       </div>

//       <div class="field">
//         <div class="control">
//           <a class="button is-info is-fixed-width" v-on:click="addAnswer"><strong>+</strong></a>
//         </div>
//       </div>

//     </div>

//     <hr />

//     <div class="field is-grouped">
//       <div class="control">
//         <a class="button is-primary">Create</a>
//       </div>
//       <div class="control">
//         <a class="button is-light">Cancel</a>
//       </div>
//     </div>
//   </div>
// </section>

// var defaultOptions  = {
//   theme: 'snow',
//   boundary: document.body,
//   modules: {
//     toolbar: [
//       ['bold', 'italic', 'underline', 'strike'],
//       ['blockquote', 'code-block'],
//       [{ 'header': 1 }, { 'header': 2 }],
//       [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//       [{ 'script': 'sub' }, { 'script': 'super' }],
//       [{ 'indent': '-1' }, { 'indent': '+1' }],
//       [{ 'direction': 'rtl' }],
//       [{ 'size': ['small', false, 'large', 'huge'] }],
//       [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
//       [{ 'color': [] }, { 'background': [] }],
//       [{ 'font': [] }],
//       [{ 'align': [] }],
//       ['clean'],
//       ['link', 'image', 'video']
//     ]
//   },
//   placeholder: 'Insert text here ...',
//   readOnly: false
// }
// if (typeof Object.assign != 'function') {
//   Object.defineProperty(Object, 'assign', {
//     value(target, varArgs) {
//       if (target == null) {
//         throw new TypeError('Cannot convert undefined or null to object')
//       }
//       const to = Object(target)
//       for (let index = 1; index < arguments.length; index++) {
//         const nextSource = arguments[index]
//         if (nextSource != null) {
//           for (const nextKey in nextSource) {
//             if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
//               to[nextKey] = nextSource[nextKey]
//             }
//           }
//         }
//       }
//       return to
//     },
//     writable: true,
//     configurable: true
//   })
// }
// Vue.component('quill-editor', {
//   template: `<div class="quill-editor">
// <slot name="toolbar"></slot>
// <div ref="editor"></div>
// </div>`,
//   data() {
//     return {
//       _options: {},
//       _content: '',
//       defaultOptions
//     }
//   },
//   props: {
//     content: String,
//     value: String,
//     disabled: {
//       type: Boolean,
//       default: false
//     },
//     options: {
//       type: Object,
//       required: false,
//       default: () => ({})
//     },
//     globalOptions: {
//       type: Object,
//       required: false,
//       default: () => ({})
//     }
//   },
//   mounted() {
//     this.initialize()
//   },
//   beforeDestroy() {
//     this.quill = null
//     delete this.quill
//   },
//   methods: {
//     // Init Quill instance
//     initialize() {
//       if (this.$el) {
//         // Options
//         this._options = Object.assign({}, this.defaultOptions, this.globalOptions, this.options)
//         // Instance
//         this.quill = new Quill(this.$refs.editor, this._options)

//         this.quill.enable(false)
//         // Set editor content
//         if (this.value || this.content) {
//           this.quill.pasteHTML(this.value || this.content)
//         }
//         // Disabled editor
//         if (!this.disabled) {
//           this.quill.enable(true)
//         }
//         // Mark model as touched if editor lost focus
//         this.quill.on('selection-change', range => {
//           if (!range) {
//             this.$emit('blur', this.quill)
//           } else {
//             this.$emit('focus', this.quill)
//           }
//         })
//         // Update model if text changes
//         this.quill.on('text-change', (delta, oldDelta, source) => {
//           let html = this.$refs.editor.children[0].innerHTML
//           const quill = this.quill
//           const text = this.quill.getText()
//           if (html === '<p><br></p>') html = ''
//           this._content = html
//           this.$emit('input', this._content)
//           this.$emit('change', { html, text, quill })
//         })
//         // Emit ready event
//         this.$emit('ready', this.quill)
//       }
//     }
//   },
//   watch: {
//     // Watch content change
//     content(newVal, oldVal) {
//       if (this.quill) {
//         if (newVal && newVal !== this._content) {
//           this._content = newVal
//           this.quill.pasteHTML(newVal)
//         } else if(!newVal) {
//           this.quill.setText('')
//         }
//       }
//     },
//     // Watch content change
//     value(newVal, oldVal) {
//       if (this.quill) {
//         if (newVal && newVal !== this._content) {
//           this._content = newVal
//           this.quill.pasteHTML(newVal)
//         } else if(!newVal) {
//           this.quill.setText('')
//         }
//       }
//     },
//     // Watch disabled change
//     disabled(newVal, oldVal) {
//       if (this.quill) {
//         this.quill.enable(!newVal)
//       }
//     }
//   }
// })
// var app = new Vue({
//   el: '#app',
//   data: {
//     editorOption: {
//       // some quill options
//     },
//     name: '',
//     topic: '',
//     topicList: [
//       'Mathematics',
//       'Physics',
//       'Chemistry'
//     ],
//     questionBody: '',
//     answers: [
//       ''
//     ]
//   },
//   methods: {
//     onEditorBlur(quill) {
//       console.log('editor blur!', quill)
//     },
//     onEditorFocus(quill) {
//       console.log('editor focus!', quill)
//     },
//     onEditorReady(quill) {
//       console.log('editor ready!', quill)
//     },
//     onEditorChange({ quill, html, text }) {
//       console.log('editor change!', quill, html, text)
//       this.content = html
//     },
//     addAnswer: function(event) {
//       // Add new empty answer
//       this.answers.push('')
//     },
//     removeAnswer: function(index) {
//       // Remove answer at index
//       this.answers.splice(index, 1)
//     }
//   }
// });

// function makeUser() {
//   return {
//     name: "Джон",
//     ref: this
//   };
// }

// let user = makeUser();

// alert(user.ref.name);

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList(list) {
//   let tmp = list;

//   while (tmp) {
//     alert(tmp.value);
//     tmp = tmp.next;
//   }

// }

// printList(list);

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "Вася",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  }
};

askPassword(user.loginOk, user.loginFail);

let range = {
  from: 1,
  to: 5,

  // for..of вызывает этот метод один раз в самом начале
  [Symbol.iterator]() {
    // ...возвращает объект-итератор:
    // далее for..of работает только с этим объектом, запрашивая следующее значение вызовом next()
    return {
      current: this.from,
      last: this.to,

      // next() вызывается на каждой итерации цикла for..of
      next() {
        // (2)
        // должен возвращать значение в виде объекта {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (let value of range) {
  alert(value); // 1, потом 2, потом 3, потом 4, потом 5
}
