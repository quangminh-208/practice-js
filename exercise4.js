// 4.  Bài tập về toán tử

/* Toán tử toán học: khai báo các biến có kiểu dữ liệu là số, 
sử dụng các giá trị đang lưu trong biến kết hợp với toán tử 
và một số bất kì để tạo ra một giá trị mới. 
Giá trị mới có thể gán lại vào một biến đã có hoặc tạo biến mới để gán giá trị đó. */

let integerNumber1 = 123;
let integerNumber2 = 456;
let decimalNumber = 8.5;

let sum = integerNumber1 + 876;
decimalNumber = integerNumber2 / 12;

console.log("🚀 ~ decimalNumber:", decimalNumber);
console.log("🚀 ~ number4:", sum);

/* Toán tử so sánh: Khai báo 2 biến với cùng kiểu dữ liệu, 
sử dụng toán tử so sánh trên 2 biến đó, nhận kết quả và ghi vào một biến mới. 
Kiểm tra xem biến mới này có kiểu dữ liệu là gì và giá trị qua mỗi lần sử dụng trên các toán tử so sánh khác nhau. */

let integerNumber3 = 125;
let integerNumber4 = 523;

let comparisonResult = integerNumber3 === integerNumber4;
console.log(typeof comparisonResult); // Data type: boolean

comparisonResult = integerNumber3 > integerNumber4;
console.log(comparisonResult); // Output: false

comparisonResult = integerNumber3 < integerNumber4;
console.log(comparisonResult); // Output: true

/* Toán tử logic: Khai báo 2 biến có thể sử dụng được toán tử logic, 
thao tác toán tử logic trên 2 biến này và nhận giá trị gán vào biến mới, 
theo dõi các giá trị qua từng loại toán tử sử dụng. */

let comparisonEx1 = 1 > 0;    // True
let comparisonEx2 = -1 > 0;   // false

let comparisonResult1 = comparisonEx1 && comparisonEx2      //true and false    => false
let comparisonResult2 = comparisonEx1 && comparisonEx1      //true and true     => true 
let comparisonResult3 = comparisonEx2 && comparisonEx2      //false and false   => false
let comparisonResult4 = comparisonEx1 || comparisonEx1      //true or true    => true
let comparisonResult5 = comparisonEx1 || comparisonEx2      //true or false     => true 
let comparisonResult6 = comparisonEx2 || comparisonEx2      //false or false   => false
let comparisonResult7 = comparisonEx1 && !comparisonEx2     //true and !(false) => true and true => true

