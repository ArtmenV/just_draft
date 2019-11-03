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

document.write(json);
