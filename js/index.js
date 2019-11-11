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

var json = [
  {
    _id: "5078c3a803ff4197dc81fbfb",
    email: "user1@gmail.com",
    image: "some_image_url",
    name: "Name 1"
  },
  {
    _id: "5078c3a803ff4197dc81fbfc",
    email: "user2@gmail.com",
    image: "some_image_url",
    name: "Name 2"
  }
];

json = JSON.stringify(json)
  .split('"_id":')
  .join('"id":');

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

const num = window.prompt();
const str = num.toString();
const result = [str[0]];

for (let x = 1; x < str.length; x++) {
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push("-", str[x]);
  } else {
    result.push(str[x]);
  }
}
console.log(result.join(""));
