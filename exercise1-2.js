/* 1. Bài tập về khai báo biến: 
Hãy viết một chương trình khai báo tất cả các biến tương ứng với các kiểu dữ liệu đã học, 
in nó ra console.*/

let age = 26;

let weight = 65.5;

let isMarried = false;

let specialCharacter = "@";

let peopleList = ["John", "Jack", "Sammuel", "David"];

let alex = {
  name: "Alex",
  age: 23,
  isMarried: false,
  yearOfBirth: function () {
    let nowYear = new Date().getFullYear();
    return nowYear - this.age;
  },
};

let sum = (a, b) => {
  return a + b;
};
console.log("===== All data types example =====");
console.log("Integer: age =  ", age);
console.log("Float: weight = ", weight);
console.log("Boolean: isMarried = ", isMarried);
console.log("Char: specialCharacter = ", specialCharacter);
console.log("Array: peopleList = ", peopleList);
console.log("Object: alex = ", alex);
console.log("Function:", sum);

/* 2. Bài tập gán giá trị mới cho biến.
Với các biến đã khai báo ở trên, hãy thay đổi giá trị cho các biến đã khai báo 
và in giá trị hiện tại ra màn hình console.
*/
age = 18;
weight = 52.4;
isMarried = true;
specialCharacter = "!";
peopleList = ["Minh", "Maria", "Sammuel", "David"];
alex = {
  name: "Maria",
  age: 30,
  isMarried: false,
};
sum = (a, b, c) => {
  return a + b + c;
};

console.log("===== Change data =====");
console.log("age: ", age);
console.log("weight", weight);
console.log("isMarried:", isMarried);
console.log("specialCharacter:", specialCharacter);
console.log("peopleList:", peopleList);
console.log("alex:", alex);
console.log("sum:", sum);
