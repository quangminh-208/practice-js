/* 3.  Bài tập về mảng:
Khai báo một mảng gồm 5 phần tử với cùng kiểu dữ liệu. 
Truy xuất từng phần tử và gán cho nó một giá trị mới 
in giá trị mà phần tử đó đang giữ ra màn hình console.
*/

let numberList = [1, 8, 82, 96, 0];

for (let i = 0; i < numberList.length; i++) {
  numberList[i] = 10;
  console.log(numberList[i]);
}

console.log("🚀 ~ numberList:", numberList);
