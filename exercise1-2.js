/* 1. Bài tập về khai báo biến: 
Hãy viết một chương trình khai báo tất cả các biến tương ứng với các kiểu dữ liệu đã học, 
in nó ra console.*/

let number1 = 123;

let number2 = 20.8;

let isDone = true;

let char = "@";

let array = [1, "two", true, 4.01];

let object = {
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
console.log("===== All data types =====");
console.log("Integer: ", number1);
console.log("Float", number2);
console.log("Boolean:", isDone);
console.log("Char:", char);
console.log("Array:", array);
console.log("Object:", object);
console.log("Function:", sum);

/* 2. Bài tập gán giá trị mới cho biến.
Với các biến đã khai báo ở trên, hãy thay đổi giá trị cho các biến đã khai báo 
và in giá trị hiện tại ra màn hình console.
*/
number1 = 456;
number2 = 0.5;
isDone = false;
char = "!";
array = [];
object = {};
sum = (a, b, c) => {
  return a + b + c;
};

console.log("===== Change data =====");
console.log("number1: ", number1);
console.log("number2", number2);
console.log("isDone:", isDone);
console.log("char:", char);
console.log("array:", array);
console.log("object:", object);
console.log("sum:", sum);
