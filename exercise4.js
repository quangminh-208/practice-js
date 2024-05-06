// 4.  Bài tập về toán tử

/* Toán tử toán học: khai báo các biến có kiểu dữ liệu là số, 
sử dụng các giá trị đang lưu trong biến kết hợp với toán tử 
và một số bất kì để tạo ra một giá trị mới. 
Giá trị mới có thể gán lại vào một biến đã có hoặc tạo biến mới để gán giá trị đó. */

let number1 = 123;
let number2 = 456;
let number3 = 8.5;

let number4 = number1 + 876;
number3 = number2 / 12;

console.log("🚀 ~ number3:", number3);
console.log("🚀 ~ number4:", number4);

/* Toán tử so sánh: Khai báo 2 biến với cùng kiểu dữ liệu, 
sử dụng toán tử so sánh trên 2 biến đó, nhận kết quả và ghi vào một biến mới. 
Kiểm tra xem biến mới này có kiểu dữ liệu là gì và giá trị qua mỗi lần sử dụng trên các toán tử so sánh khác nhau. */

let number5 = 125;
let number6 = 523;

let result = number5 === number6;
console.log(typeof result); // Data type: boolean

result = number5 > number6;
console.log(result); // Output: false

result = number5 < number6;
console.log(result); // Output: true

/* Toán tử logic: Khai báo 2 biến có thể sử dụng được toán tử logic, 
thao tác toán tử logic trên 2 biến này và nhận giá trị gán vào biến mới, 
theo dõi các giá trị qua từng loại toán tử sử dụng. */

let boolean1 = 1 > 0;    // True
let boolean2 = -1 > 0;   // false

let result1 = boolean1 && boolean2      //true and false    => false
let result2 = boolean1 && boolean1      //true and true     => true 
let result3 = boolean2 && boolean2      //false and false   => false
let result4 = boolean1 || boolean1      //true or true    => true
let result5 = boolean1 || boolean2      //true or false     => true 
let result6 = boolean2 || boolean2      //false or false   => false
let result7 = boolean1 && !boolean2     //true and !(false) => true and true => true

